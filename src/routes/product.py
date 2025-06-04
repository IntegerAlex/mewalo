from flask import Blueprint, jsonify, request
from db.mongo import get_products , product_collection
import logging

product_bp = Blueprint('product', __name__, url_prefix='/')

@product_bp.route('/', methods=['GET'])
def get_products_route():
    try:
        products = get_products() 
        return jsonify({"success": True, "data": products}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@product_bp.route("/<subcategory>/<name>", methods=['GET'])
def get_product_variant(subcategory: str, name: str):
    logging.info(f"Attempting to fetch product with subcategory: {subcategory} and name: {name}")
    product = product_collection.find_one({"subcategory": subcategory, "name": name}, {"_id": 0})
    logging.info(f"Database query result for {subcategory}/{name}: {product}")
    if not product:
        return jsonify({"success": False, "error": "Variant not found"}), 404
    return jsonify({"success": True, "data": product}), 200
