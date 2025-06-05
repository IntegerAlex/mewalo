from typing import Dict, Any
from flask import Blueprint, request, jsonify
from pydantic import BaseModel

class RegisterRequest(BaseModel):
    phone: str

class LoginRequest(BaseModel):
    phone: str

class VerifyRequest(BaseModel):
    phone: str
    otp: str

# In-memory storage
pending_registrations: Dict[str, Dict] = {}
users: Dict[str, Dict] = {}
pending_logins: Dict[str, bool] = {}

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = RegisterRequest(**request.json)
    pending_registrations[data.phone] = data.dict()
    return jsonify({"message": "OTP sent"}), 201

@auth_bp.route('/verify-otp', methods=['POST'])
def verify_otp():
    data = VerifyRequest(**request.json)
    if data.phone in pending_registrations and data.otp == "123456":
        users[data.phone] = pending_registrations.pop(data.phone)
        return jsonify({"message": "Registration complete"}), 200
    return jsonify({"error": "Invalid OTP"}), 400

@auth_bp.route('/login', methods=['POST'])
def login():
    data = LoginRequest(**request.json)
    if data.phone not in users:
        return jsonify({"error": "User not found"}), 400
    pending_logins[data.phone] = True
    return jsonify({"message": "OTP sent"}), 200

@auth_bp.route('/verify-login', methods=['POST'])
def verify_login():
    data = VerifyRequest(**request.json)
    if data.phone in pending_logins and data.otp == "123456":
        pending_logins.pop(data.phone)
        return jsonify({"message": "Login successful", "token": f"token_{data.phone}"}), 200
    return jsonify({"error": "Invalid OTP"}), 400