from flask import Blueprint, jsonify, request
from db.mongo import get_products, get_product_by_id, get_products_by_category_and_subcategory
import logging

product_bp = Blueprint('product', __name__, url_prefix='/')

@product_bp.route('/', methods=['GET'])
def get_products_route():
    try:
        # Extract query parameters
        page = request.args.get('page', 1, type=int)
        limit = request.args.get('limit', 10, type=int)
        category = request.args.get('category', type=str)
        search = request.args.get('search', type=str)
        min_price = request.args.get('min_price', type=float)
        max_price = request.args.get('max_price', type=float)

        query_params = {}
        
        # Handle multiple categories (comma-separated)
        if category:
            if ',' in category:
                # Handle multiple categories
                categories = [cat.strip().lower() for cat in category.split(',') if cat.strip()]
                query_params["category"] = {"$in": categories}
            else:
                # Handle single category
                query_params["category"] = category.lower()
        
        # Handle search
        if search:
            query_params["name"] = {"$regex": search, "$options": "i"} # Case-insensitive search
        
        # Handle price filters (these will be processed in get_products function)
        if min_price is not None:
            query_params["min_price"] = min_price
        if max_price is not None:
            query_params["max_price"] = max_price

        products_data = get_products(query=query_params, page=page, limit=limit)

        return jsonify({"success": True, "data": products_data["data"], "pagination": products_data["pagination"]}), 200
    except Exception as e:
        logging.error(f"Error in get_products_route: {e}")
        return jsonify({"success": False, "error": str(e)}), 500

@product_bp.route("/<string:product_id>", methods=['GET'])
def get_single_product_route(product_id: str):
    try:
        product = get_product_by_id(product_id)
        if not product:
            return jsonify({"success": False, "error": "Product not found"}), 404
        return jsonify({"success": True, "data": product}), 200
    except Exception as e:
        logging.error(f"Error in get_single_product_route for product_id {product_id}: {e}")
        return jsonify({"success": False, "error": str(e)}), 500

@product_bp.route("/category/<string:category>/subcategory/<string:subcategory>", methods=['GET'])
def get_products_by_category_subcategory_route(category: str, subcategory: str):
    try:
        # Add pagination support to category/subcategory endpoint
        page = request.args.get('page', 1, type=int)
        limit = request.args.get('limit', 50, type=int)  # Default higher limit for category pages
        
        # Use the main get_products function with category and subcategory filters
        query_params = {
            "category": category.lower(),
            "subcategory": subcategory.lower()
        }
        
        products_data = get_products(query=query_params, page=page, limit=limit)
        
        if not products_data["data"]:
            return jsonify({"success": False, "error": "No products found for this category and subcategory"}), 404
        
        return jsonify({
            "success": True, 
            "data": products_data["data"], 
            "category": category, 
            "subcategory": subcategory, 
            "total": products_data["pagination"]["total"],
            "pagination": products_data["pagination"]
        }), 200
    except Exception as e:
        logging.error(f"Error in get_products_by_category_subcategory_route for category {category}, subcategory {subcategory}: {e}")
        return jsonify({"success": False, "error": str(e)}), 500

# Removed the /<subcategory>/<name> route as it's not explicitly used by the frontend's api.ts structure
# If a specific product variant by name is needed, it should be handled via product_id or search.
