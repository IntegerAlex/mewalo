from pymongo import MongoClient
from dotenv import load_dotenv
import os
import logging
from typing import Optional, Dict, Any
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

def get_products():
    """Fetch all products from the database."""
    if product_collection is None:
        logger.error("Database connection not available.")
        return []
    try:
        # Exclude _id explicitly if not needed in frontend
        return list(product_collection.find({}, {'_id': 0}))
    except Exception as e:
        logger.error(f"Error fetching products: {e}")
        return []

def get_product_by_id(product_id: str):
    """Fetch a single product by ID."""
    if product_collection is None:
        logger.error("Database connection not available.")
        return None
    try:
        # Exclude _id explicitly if not needed in frontend
        return product_collection.find_one({"product_id": product_id}, {'_id': 0})
    except Exception as e:
        logging.error(f"Error fetching product {product_id}: {e}")
        return None

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

