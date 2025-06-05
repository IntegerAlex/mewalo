from flask import Flask, jsonify


from utils.error_handlers import register_error_handlers

# Import route blueprints
from routes.auth import auth_bp
from routes.product import product_bp
from routes.categories import category_bp

def create_app():
    """Application factory pattern for Flask app creation"""
    
    
    # Create Flask app
    app = Flask(__name__)
    
    
    
    # Register error handlers
    register_error_handlers(app)
    
    # Register blueprints with versioned API endpoints
    app.register_blueprint(auth_bp, url_prefix='/api/v1/auth')
    app.register_blueprint(product_bp, url_prefix='/api/v1/product')
    app.register_blueprint(category_bp, url_prefix='/api/v1/categories')
    
    # Health check endpoint
    @app.route('/health', methods=['GET'])
    def health_check():
        return jsonify({
            "status": "healthy",
            "service": "mewalo-backend",
            "version": "1.0.0",
            "success": True
        }), 200
    
    # Default route
    @app.route('/', methods=['GET'])
    def home():
        return jsonify({
            "success": True,
            "message": "Mewalo Backend API is live",
            "version": "1.0.0",
            "endpoints": {
                "auth": "/api/v1/auth",
                "products": "/api/v1/product",
                "categories": "/api/v1/categories",
                "health": "/health"
            }
        })
    
    
    return app

# Create app instance
app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
# Gunicorn command to run the app
# gunicorn main:app --bind
