from flask import Blueprint, jsonify
from db.mongo import product_collection
category_bp = Blueprint('category_bp', __name__)

@category_bp.route('/', methods=['GET'])
def get_unique_categories():
    categories = product_collection.distinct("category")
    result = [{"id": cat} for cat in categories]
    if not result:
        return jsonify({"success": False, "error": "No categories found"}), 404
    return jsonify({"success": True, "data": result}), 200


