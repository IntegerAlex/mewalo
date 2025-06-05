import logging
from flask import jsonify
from pydantic import ValidationError

logger = logging.getLogger(__name__)

def handle_validation_error(error: ValidationError):
    """Handle Pydantic validation errors"""
    logger.warning(f"Validation error: {error}")
    return jsonify({
        "error": "Invalid request data",
        "details": error.errors(),
        "success": False
    }), 400

def handle_generic_error(error: Exception):
    """Handle generic exceptions"""
    logger.error(f"Unexpected error: {str(error)}", exc_info=True)
    return jsonify({
        "error": "Internal server error",
        "success": False
    }), 500

def register_error_handlers(app):
    """Register error handlers with Flask app"""
    
    @app.errorhandler(ValidationError)
    def validation_error_handler(error):
        return handle_validation_error(error)
    
    @app.errorhandler(404)
    def not_found_handler(error):
        return jsonify({
            "error": "Resource not found",
            "success": False
        }), 404
    
    @app.errorhandler(405)
    def method_not_allowed_handler(error):
        return jsonify({
            "error": "Method not allowed",
            "success": False
        }), 405
    
    @app.errorhandler(500)
    def internal_error_handler(error):
        return handle_generic_error(error) 