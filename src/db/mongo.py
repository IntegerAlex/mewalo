from pymongo import MongoClient
from dotenv import load_dotenv
import os
import logging

# Load environment variables from .env
load_dotenv()

# Logging setup
logging.basicConfig(level=logging.INFO, format='[%(levelname)s] %(message)s')

# MongoDB connection
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
MONGO_DB = os.getenv("MONGO_DB", "dummy_db")

client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=3000)
try:
    client.server_info()
except Exception as e:
    logging.error(f"MongoDB connection error: {e}")
    raise SystemExit(1)

db = client[MONGO_DB]

# Collections
product_collection = db['products']
category_collection = db['categories']

# --- Utility functions ---

def get_products():
    """Fetch all products from the database."""
    try:
        return list(product_collection.find({}, {'_id': False}))
    except Exception as e:
        logging.error(f"Error fetching products: {e}")
        return []

def get_product_by_id(product_id: str):
    """Fetch a single product by ID."""
    try:
        return product_collection.find_one({"product_id": product_id}, {'_id': False})
    except Exception as e:
        logging.error(f"Error fetching product {product_id}: {e}")
        return None

