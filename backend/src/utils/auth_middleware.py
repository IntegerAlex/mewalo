from functools import wraps
from flask import request, jsonify, current_app
import jwt
import os
from datetime import datetime, timedelta
import logging

logger = logging.getLogger(__name__)

# JWT Configuration
JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'your-secret-key-change-this-in-production')
JWT_ALGORITHM = 'HS256'
JWT_EXPIRATION_HOURS = 24

def generate_jwt_token(user_data: dict) -> str:
    """
    Generate a JWT token for authenticated user
    """
    try:
        payload = {
            'user_id': user_data.get('phone'),  # Using phone as user identifier
            'first_name': user_data.get('first_name'),
            'last_name': user_data.get('last_name'),
            'email': user_data.get('email'),
            'phone': user_data.get('phone'),
            'exp': datetime.utcnow() + timedelta(hours=JWT_EXPIRATION_HOURS),
            'iat': datetime.utcnow()
        }
        
        token = jwt.encode(payload, JWT_SECRET_KEY, algorithm=JWT_ALGORITHM)
        return token
    except Exception as e:
        logger.error(f"Error generating JWT token: {e}")
        return None

def verify_jwt_token(token: str) -> dict:
    """
    Verify and decode JWT token
    """
    try:
        payload = jwt.decode(token, JWT_SECRET_KEY, algorithms=[JWT_ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        logger.warning("JWT token has expired")
        return None
    except jwt.InvalidTokenError as e:
        logger.warning(f"Invalid JWT token: {e}")
        return None

def require_auth(f):
    """
    Decorator to require JWT authentication for endpoints
    """
    @wraps(f)
    def decorated_function(*args, **kwargs):
        # Get token from Authorization header
        auth_header = request.headers.get('Authorization')
        
        if not auth_header:
            return jsonify({
                'success': False, 
                'error': 'Authorization header is required'
            }), 401
        
        # Check if header starts with 'Bearer '
        if not auth_header.startswith('Bearer '):
            return jsonify({
                'success': False, 
                'error': 'Authorization header must start with "Bearer "'
            }), 401
        
        # Extract token
        try:
            token = auth_header.split(' ')[1]
        except IndexError:
            return jsonify({
                'success': False, 
                'error': 'Invalid authorization header format'
            }), 401
        
        # Verify token
        payload = verify_jwt_token(token)
        if not payload:
            return jsonify({
                'success': False, 
                'error': 'Invalid or expired token'
            }), 401
        
        # Add user info to request context
        request.current_user = payload
        
        return f(*args, **kwargs)
    
    return decorated_function

def optional_auth(f):
    """
    Decorator for optional authentication - adds user info if token is present
    """
    @wraps(f)
    def decorated_function(*args, **kwargs):
        auth_header = request.headers.get('Authorization')
        request.current_user = None
        
        if auth_header and auth_header.startswith('Bearer '):
            try:
                token = auth_header.split(' ')[1]
                payload = verify_jwt_token(token)
                if payload:
                    request.current_user = payload
            except Exception as e:
                logger.warning(f"Optional auth failed: {e}")
        
        return f(*args, **kwargs)
    
    return decorated_function 