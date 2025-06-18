from typing import Dict, Any
from flask import Blueprint, request, jsonify
from pydantic import BaseModel, EmailStr
from utils.auth_middleware import generate_jwt_token

class RegisterRequest(BaseModel):
    first_name: str
    last_name: str
    phone: str
    email: EmailStr

class LoginRequest(BaseModel):
    phone: str

class VerifyRequest(BaseModel):
    phone: str
    otp: str

# In-memory storage (replace with a proper database in a real application)
pending_registrations: Dict[str, Dict] = {}
users: Dict[str, Dict] = {}
pending_logins: Dict[str, bool] = {}

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    try:
        data = RegisterRequest(**request.json)
        # In a real app, generate and send a real OTP here
        pending_registrations[data.phone] = {
            "first_name": data.first_name,
            "last_name": data.last_name,
            "phone": data.phone,
            "email": data.email,
            "otp": "123456" # For testing purposes, replace with real OTP generation
        }
        return jsonify({"success": True, "message": "OTP sent to phone"}), 201
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 400

@auth_bp.route('/verify-registration', methods=['POST'])
def verify_registration():
    try:
        data = VerifyRequest(**request.json)
        pending_data = pending_registrations.get(data.phone)
        if pending_data and pending_data["otp"] == data.otp:
            # Registration successful, save user data
            user_data = {
                "first_name": pending_data["first_name"],
                "last_name": pending_data["last_name"],
                "phone": pending_data["phone"],
                "email": pending_data["email"]
            }
            users[data.phone] = user_data
            pending_registrations.pop(data.phone)
            
            # Generate JWT token
            token = generate_jwt_token(user_data)
            if not token:
                return jsonify({"success": False, "error": "Failed to generate authentication token"}), 500
            
            return jsonify({
                "success": True, 
                "message": "Registration complete", 
                "token": token,
                "user": user_data
            }), 200
        return jsonify({"success": False, "error": "Invalid OTP or phone number"}), 400
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 400

@auth_bp.route('/login', methods=['POST'])
def login():
    try:
        data = LoginRequest(**request.json)
        if data.phone not in users:
            return jsonify({"success": False, "error": "User not found"}), 400
        # In a real app, generate and send a real OTP here
        pending_logins[data.phone] = True # Indicate OTP sent for login
        return jsonify({"success": True, "message": "OTP sent to phone"}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 400

@auth_bp.route('/verify-login', methods=['POST'])
def verify_login():
    try:
        data = VerifyRequest(**request.json)
        if data.phone in pending_logins and data.otp == "123456": # For testing purposes
            pending_logins.pop(data.phone)
            user_data = users[data.phone]
            
            # Generate JWT token
            token = generate_jwt_token(user_data)
            if not token:
                return jsonify({"success": False, "error": "Failed to generate authentication token"}), 500
            
            return jsonify({
                "success": True, 
                "message": "Login successful", 
                "token": token, 
                "user": user_data
            }), 200
        return jsonify({"success": False, "error": "Invalid OTP"}), 400
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 400