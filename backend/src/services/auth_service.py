from typing import Dict, Any, Tuple, Optional
from jwt_extended import create_access_token

class AuthService:
    def __init__(self):
        self.pending_registrations: Dict[str, Dict] = {}
        self.users: Dict[str, Dict] = {}
        self.pending_logins: Dict[str, bool] = {}
        self.dummy_otp = "123456"

    def register_user(self, phone: str, user_data: Dict) -> Tuple[bool, str]:
        self.pending_registrations[phone] = user_data
        return True, "OTP sent"

    def verify_registration_otp(self, phone: str, otp: str) -> Tuple[bool, str]:
        if phone in self.pending_registrations and otp == self.dummy_otp:
            self.users[phone] = self.pending_registrations.pop(phone)
            return True, "Registration complete"
        return False, "Invalid OTP"

    def login_user(self, phone: str) -> Tuple[bool, str]:
        if phone not in self.users:
            return False, "User not found"
        self.pending_logins[phone] = True
        return True, "OTP sent"

    def verify_login_otp(self, phone: str, otp: str) -> Tuple[bool, str, Optional[str]]:
        if phone in self.pending_logins and otp == self.dummy_otp:
            self.pending_logins.pop(phone)
            jwt_token = create_access_token({"phone": phone}, "secret-key", algorithm="HS256")
            return True, "Login successful", jwt_token
        return False, "Invalid OTP", None