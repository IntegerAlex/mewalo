from flask import Blueprint, jsonify, request
from db.mongo import get_categories_with_product_counts, get_products
import logging

category_bp = Blueprint('category_bp', __name__)

@category_bp.route('/', methods=['GET'])
def get_categories_route():
    try:
        categories = get_categories_with_product_counts()
        if not categories:
            # Return success:true with empty data if no categories found, matching frontend expectation
            return jsonify({"success": True, "data": [], "total": 0}), 200
        return jsonify({"success": True, "data": categories, "total": len(categories)}), 200
    except Exception as e:
        logging.error(f"Error in get_categories_route: {e}")
        return jsonify({"success": False, "error": str(e)}), 500

@category_bp.route('/<string:category_name>/products', methods=['GET'])
def get_products_by_category_route(category_name: str):
    try:
        # Add pagination support to category products endpoint
        page = request.args.get('page', 1, type=int)
        limit = request.args.get('limit', 50, type=int)  # Default higher limit for category pages
        
        # Use the main get_products function with category filter for consistent pagination
        query_params = {"category": category_name.lower()}
        products_data = get_products(query=query_params, page=page, limit=limit)
        
        if not products_data["data"]:
            return jsonify({"success": False, "error": "No products found for this category"}), 404
        
        return jsonify({
            "success": True, 
            "data": products_data["data"], 
            "category": category_name, 
            "total": products_data["pagination"]["total"],
            "pagination": products_data["pagination"]
        }), 200
    except Exception as e:
        logging.error(f"Error in get_products_by_category_route for category {category_name}: {e}")
        return jsonify({"success": False, "error": str(e)}), 500


