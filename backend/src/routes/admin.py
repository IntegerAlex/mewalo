from flask import Blueprint, request, jsonify
import logging
from db import admin_mongo
from utils.auth_middleware import require_auth

admin_bp = Blueprint('admin_bp', __name__)
logger = logging.getLogger(__name__)

@admin_bp.route('/products', methods=['GET'])
@require_auth
def get_all_products_admin_route():
    """Admin route to get all products."""
    products = admin_mongo.get_all_products_admin()
    if products is not None:
        return jsonify({'success': True, 'data': products}), 200
    return jsonify({'success': False, 'message': 'Failed to retrieve products.'}), 500

@admin_bp.route('/products', methods=['POST'])
@require_auth
def create_product_admin_route():
    """Admin route to create a new product."""
    product_data = request.get_json()
    if not product_data:
        return jsonify({'success': False, 'message': 'No product data provided.'}), 400

    product_id = admin_mongo.create_product_admin(product_data)
    if product_id:
        return jsonify({'success': True, 'message': 'Product created successfully', 'id': product_id}), 201
    return jsonify({'success': False, 'message': 'Failed to create product.'}), 500

@admin_bp.route('/products/<string:product_id>', methods=['GET'])
@require_auth
def get_product_by_id_admin_route(product_id):
    """Admin route to get a product by ID."""
    product = admin_mongo.get_product_by_id_admin(product_id)
    if product:
        return jsonify({'success': True, 'data': product}), 200
    return jsonify({'success': False, 'message': 'Product not found.'}), 404

@admin_bp.route('/products/<string:product_id>', methods=['PUT'])
@require_auth
def update_product_admin_route(product_id):
    """Admin route to update an existing product."""
    update_data = request.get_json()
    if not update_data:
        return jsonify({'success': False, 'message': 'No update data provided.'}), 400

    if admin_mongo.update_product_admin(product_id, update_data):
        return jsonify({'success': True, 'message': 'Product updated successfully.'}), 200
    return jsonify({'success': False, 'message': 'Failed to update product or product not found.'}), 500

@admin_bp.route('/products/<string:product_id>', methods=['DELETE'])
@require_auth
def delete_product_admin_route(product_id):
    """Admin route to delete a product by ID."""
    if admin_mongo.delete_product_admin(product_id):
        return jsonify({'success': True, 'message': 'Product deleted successfully.'}), 200
    return jsonify({'success': False, 'message': 'Failed to delete product or product not found.'}), 500

@admin_bp.route('/fields/add', methods=['POST'])
@require_auth
def add_field_to_products_route():
    """Admin route to add a new field to all products."""
    data = request.get_json()
    field_name = data.get('field_name')
    default_value = data.get('default_value')

    if not field_name:
        return jsonify({'success': False, 'message': 'Field name is required.'}), 400

    modified_count = admin_mongo.add_field_to_products_admin(field_name, default_value)
    return jsonify({
        'success': True,
        'message': f"Added field '{field_name}' to {modified_count} products."
    }), 200

@admin_bp.route('/fields/remove', methods=['POST'])
@require_auth
def remove_field_from_products_route():
    """Admin route to remove a field from all products."""
    data = request.get_json()
    field_name = data.get('field_name')

    if not field_name:
        return jsonify({'success': False, 'message': 'Field name is required.'}), 400

    modified_count = admin_mongo.remove_field_from_products_admin(field_name)
    return jsonify({
        'success': True,
        'message': f"Removed field '{field_name}' from {modified_count} products."
    }), 200 