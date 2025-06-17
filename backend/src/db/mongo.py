from pymongo import MongoClient
from dotenv import load_dotenv
import os
import logging
from typing import Optional, Dict, Any, List
from uuid import uuid4
from datetime import datetime

# Load environment variables from .env
load_dotenv()

# Logging setup
logging.basicConfig(level=logging.INFO, format='[%(levelname)s] %(message)s')
logger = logging.getLogger(__name__)

# MongoDB connection
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
MONGO_DB = os.getenv("MONGO_DB", "dummy_db")

try:
    client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=5000) # Increased timeout
    client.admin.command('ping') # Command to check if the connection is active
    logger.info("MongoDB connection successful!")
except Exception as e:
    logger.error(f"MongoDB connection error: {e}")
    # Decide whether to exit or handle gracefully based on your app's needs
    # For now, we'll log and let the app potentially start without DB if it can
    client = None # Ensure client is None if connection failed

db = client[MONGO_DB] if client is not None else None

# Collections
# Check if db object exists before accessing collections
product_collection = db['products'] if db is not None else None
category_collection = db['categories'] if db is not None else None
user_collection = db['user'] if db is not None else None # User collection
temp_reg_collection = db['temp_registrations'] if db is not None else None # Temporary registrations collection

# --- Utility functions ---

def get_products(query: Dict[str, Any] = {}, page: int = 1, limit: int = 10) -> Dict[str, Any]:
    """Fetch products from the database with optional filtering and pagination."""
    if product_collection is None:
        logger.error("Database connection not available.")
        return {"data": [], "pagination": {"page": 1, "limit": 0, "total": 0, "pages": 0, "has_next": False, "has_prev": False}}
    try:
        # Ensure price range is handled correctly
        if "min_price" in query or "max_price" in query:
            price_query = {}
            if "min_price" in query:
                price_query["$gte"] = query.pop("min_price")
            if "max_price" in query:
                price_query["$lte"] = query.pop("max_price")
            query["price"] = price_query

        # Build the aggregation pipeline
        pipeline = []

        # 1. Match based on query parameters
        if query:
            pipeline.append({"$match": query})

        # 2. Count total documents before pagination
        total_count_pipeline = list(pipeline)
        total_count_pipeline.append({"$count": "total"})
        total_result = list(product_collection.aggregate(total_count_pipeline))
        total_products = total_result[0]["total"] if total_result else 0

        # 3. Add pagination stages
        skip = (page - 1) * limit
        pipeline.append({"$skip": skip})
        pipeline.append({"$limit": limit})

        # 4. Project to exclude _id and ensure product_id exists
        pipeline.append({"$project": {"_id": 0}})

        products = list(product_collection.aggregate(pipeline))

        total_pages = (total_products + limit - 1) // limit if limit > 0 else 0
        has_next = page < total_pages
        has_prev = page > 1

        pagination = {
            "page": page,
            "limit": limit,
            "total": total_products,
            "pages": total_pages,
            "has_next": has_next,
            "has_prev": has_prev,
        }

        return {"data": products, "pagination": pagination}
    except Exception as e:
        logger.error(f"Error fetching products with filter/pagination: {e}")
        return {"data": [], "pagination": {"page": page, "limit": limit, "total": 0, "pages": 0, "has_next": False, "has_prev": False}}

def get_product_by_id(product_id: str) -> Optional[Dict[str, Any]]:
    """Fetch a single product by its unique product_id."""
    if product_collection is None:
        logger.error("Database connection not available.")
        return None
    try:
        # Ensure to query by 'product_id' field, not '_id'
        return product_collection.find_one({"product_id": product_id}, {"_id": 0})
    except Exception as e:
        logger.error(f"Error fetching product by product_id {product_id}: {e}")
        return None

def get_products_by_category_and_subcategory(category: str, subcategory: str) -> List[Dict[str, Any]]:
    """Fetch products by category and subcategory."""
    if product_collection is None:
        logger.error("Database connection not available.")
        return []
    try:
        # Ensure to query by 'category' and 'subcategory' fields
        return list(product_collection.find({"category": category, "subcategory": subcategory}, {"_id": 0}))
    except Exception as e:
        logger.error(f"Error fetching products by category {category} and subcategory {subcategory}: {e}")
        return []

def get_categories_with_product_counts() -> List[Dict[str, Any]]:
    """Fetch all unique categories with their respective product counts."""
    if product_collection is None:
        logger.error("Database connection not available.")
        return []
    try:
        # Aggregate to get unique categories and count products in each
        pipeline = [
            {"$group": {"_id": "$category", "product_count": {"$sum": 1}}},
            {"$project": {"_id": 0, "id": "$_id", "name": "$_id", "product_count": 1}}
        ]
        return list(product_collection.aggregate(pipeline))
    except Exception as e:
        logger.error(f"Error fetching categories with product counts: {e}")
        return []

def get_products_by_category(category_name: str) -> List[Dict[str, Any]]:
    """Fetch all products belonging to a specific category."""
    if product_collection is None:
        logger.error("Database connection not available.")
        return []
    try:
        return list(product_collection.find({"category": category_name}, {"_id": 0}))
    except Exception as e:
        logger.error(f"Error fetching products for category {category_name}: {e}")
        return []

# --- User and Registration functions (New) ---

def insert_temp_registration(user_data: Dict[str, Any]) -> Optional[str]:
    """
    Inserts temporary user data for registration verification.
    Returns the temporary registration ID.
    """
    if temp_reg_collection is None:
        logger.error("Temporary registration collection not available.")
        return None
    try:
        # Add a unique identifier for this temporary record
        temp_reg_id = str(uuid4())
        temp_data = {"_id": temp_reg_id, **user_data, "created_at": datetime.utcnow()}
        temp_reg_collection.insert_one(temp_data)
        logger.info(f"Inserted temporary registration: {temp_reg_id}")
        return temp_reg_id
    except Exception as e:
        logger.error(f"Error inserting temporary registration: {e}")
        return None
        
def get_temp_registration(temp_reg_id: str) -> Optional[Dict[str, Any]]:
    """
    Retrieves temporary user data by ID.
    """
    if temp_reg_collection is None:
        logger.error("Temporary registration collection not available.")
        return None
    try:
        temp_data = temp_reg_collection.find_one({"_id": temp_reg_id})
        if temp_data:
            logger.info(f"Retrieved temporary registration: {temp_reg_id}")
        return temp_data
    except Exception as e:
        logger.error(f"Error retrieving temporary registration {temp_reg_id}: {e}")
        return None

def delete_temp_registration(temp_reg_id: str) -> bool:
    """
    Deletes temporary user data by ID.
    Returns True if deleted, False otherwise.
    """
    if temp_reg_collection is None:
        logger.error("Temporary registration collection not available.")
        return False
    try:
        result = temp_reg_collection.delete_one({"_id": temp_reg_id})
        if result.deleted_count > 0:
            logger.info(f"Deleted temporary registration: {temp_reg_id}")
            return True
        logger.warning(f"Temporary registration not found for deletion: {temp_reg_id}")
        return False
    except Exception as e:
        logger.error(f"Error deleting temporary registration {temp_reg_id}: {e}")
        return False

def insert_user(user_data: Dict[str, Any]) -> Optional[str]:
    """
    Inserts a new user into the permanent user collection.
    Returns the user ID.
    """
    if user_collection is None:
        logger.error("User collection not available.")
        return None
    try:
        # Ensure _id is generated if not provided, or use a consistent ID strategy
        if '_id' not in user_data:
             user_data['_id'] = str(uuid4())
        
        # Add timestamps
        user_data['created_at'] = datetime.utcnow()
        user_data['updated_at'] = datetime.utcnow()

        result = user_collection.insert_one(user_data)
        user_id = str(result.inserted_id)
        logger.info(f"Inserted new user: {user_id}")
        return user_id
    except Exception as e:
        logger.error(f"Error inserting user: {e}")
        return None

def find_user_by_phone(phone_number: str) -> Optional[Dict[str, Any]]:
    """
    Finds a user by their phone number.
    """
    if user_collection is None:
        logger.error("User collection not available.")
        return None
    try:
        # Exclude _id explicitly if not needed in frontend
        user_data = user_collection.find_one({"phone": phone_number}, {'_id': 0})
        if user_data:
            logger.info(f"Found user by phone: {phone_number}")
        return user_data
    except Exception as e:
        logger.error(f"Error finding user by phone {phone_number}: {e}")
        return None

def find_user_by_email(email: str) -> Optional[Dict[str, Any]]:
    """
    Finds a user by their email address.
    """
    if user_collection is None:
        logger.error("User collection not available.")
        return None
    try:
        # Exclude _id explicitly if not needed in frontend
        user_data = user_collection.find_one({"email": email}, {'_id': 0})
        if user_data:
            logger.info(f"Found user by email: {email}")
        return user_data
    except Exception as e:
        logger.error(f"Error finding user by email {email}: {e}")
        return None

# TODO: Add index creation for frequently queried fields like phone and email
# Example: user_collection.create_index("phone", unique=True)
# Example: user_collection.create_index("email", unique=True)

