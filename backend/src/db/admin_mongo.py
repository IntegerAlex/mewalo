from typing import Dict, Any, List, Optional
import logging
from db.mongo import product_collection # Import the existing product_collection
from bson import ObjectId # For handling MongoDB _id for updates

logger = logging.getLogger(__name__)

def get_all_products_admin() -> List[Dict[str, Any]]:
    """Fetches all products for admin view, without pagination or filters."""
    if product_collection is None:
        logger.error("Database connection not available.")
        return []
    try:
        # Convert ObjectId to string for JSON serialization and use product_id field
        products = []
        for product in product_collection.find({}):
            # Convert MongoDB _id to string and add as product_id if it doesn't exist
            if 'product_id' not in product:
                product['product_id'] = str(product['_id'])
            # Remove MongoDB _id from response to avoid confusion
            if '_id' in product:
                del product['_id']
            products.append(product)
        return products
    except Exception as e:
        logger.error(f"Error fetching all products for admin: {e}")
        return []

def create_product_admin(product_data: Dict[str, Any]) -> Optional[str]:
    """Inserts a new product document."""
    if product_collection is None:
        logger.error("Database connection not available.")
        return None
    try:
        # Generate a product_id if not provided
        result = product_collection.insert_one(product_data)
        # Update the inserted document to include product_id if it wasn't provided
        if 'product_id' not in product_data:
            product_collection.update_one(
                {"_id": result.inserted_id},
                {"$set": {"product_id": str(result.inserted_id)}}
            )
        return str(result.inserted_id)
    except Exception as e:
        logger.error(f"Error creating product: {e}")
        return None

def get_product_by_id_admin(product_id: str) -> Optional[Dict[str, Any]]:
    """Fetches a single product by its product_id."""
    if product_collection is None:
        logger.error("Database connection not available.")
        return None
    try:
        # Try to find by product_id first, then by _id as fallback
        product = product_collection.find_one({"product_id": product_id})
        if not product:
            # Fallback to _id lookup if product_id doesn't exist
            try:
                product = product_collection.find_one({"_id": ObjectId(product_id)})
            except:
                pass
        
        if product:
            # Ensure product_id exists
            if 'product_id' not in product:
                product['product_id'] = str(product['_id'])
            # Remove MongoDB _id from response
            if '_id' in product:
                del product['_id']
        return product
    except Exception as e:
        logger.error(f"Error fetching product {product_id} for admin: {e}")
        return None

def update_product_admin(product_id: str, update_data: Dict[str, Any]) -> bool:
    """Updates an existing product document by its product_id."""
    if product_collection is None:
        logger.error("Database connection not available.")
        return False
    try:
        # Try to update by product_id first, then by _id as fallback
        result = product_collection.update_one({"product_id": product_id}, {"$set": update_data})
        if result.matched_count == 0:
            # Fallback to _id lookup
            try:
                result = product_collection.update_one({"_id": ObjectId(product_id)}, {"$set": update_data})
            except:
                pass
        return result.modified_count > 0
    except Exception as e:
        logger.error(f"Error updating product {product_id}: {e}")
        return False

def delete_product_admin(product_id: str) -> bool:
    """Deletes a product document by its product_id."""
    if product_collection is None:
        logger.error("Database connection not available.")
        return False
    try:
        # Try to delete by product_id first, then by _id as fallback
        result = product_collection.delete_one({"product_id": product_id})
        if result.deleted_count == 0:
            # Fallback to _id lookup
            try:
                result = product_collection.delete_one({"_id": ObjectId(product_id)})
            except:
                pass
        return result.deleted_count > 0
    except Exception as e:
        logger.error(f"Error deleting product {product_id}: {e}")
        return False

def add_field_to_products_admin(field_name: str, default_value: Any) -> int:
    """Adds a new field with a default value to all existing products in the collection."""
    if product_collection is None:
        logger.error("Database connection not available.")
        return 0
    try:
        result = product_collection.update_many(
            {field_name: {"$exists": False}}, # Only add to documents that don't have the field
            {"$set": {field_name: default_value}}
        )
        logger.info(f"Added field '{field_name}' with value '{default_value}' to {result.modified_count} products")
        return result.modified_count
    except Exception as e:
        logger.error(f"Error adding field '{field_name}' to products: {e}")
        return 0

def remove_field_from_products_admin(field_name: str) -> int:
    """Removes a field from all products in the collection."""
    if product_collection is None:
        logger.error("Database connection not available.")
        return 0
    try:
        result = product_collection.update_many(
            {field_name: {"$exists": True}}, # Only remove from documents that have the field
            {"$unset": {field_name: ""}}
        )
        logger.info(f"Removed field '{field_name}' from {result.modified_count} products")
        return result.modified_count
    except Exception as e:
        logger.error(f"Error removing field '{field_name}' from products: {e}")
        return 0 