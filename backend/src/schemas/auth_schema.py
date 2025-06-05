from pydantic import BaseModel, EmailStr, Field
from typing import Optional

class RegisterRequest(BaseModel):
    first_name: str = Field(..., min_length=1, max_length=50, description="User's first name")
    last_name: str = Field(..., min_length=1, max_length=50, description="User's last name")
    phone: str = Field(..., min_length=10, max_length=15, description="User's phone number")
    email: EmailStr = Field(..., description="User's email address")

class VerifyRegistrationRequest(BaseModel):
    phone: str = Field(..., min_length=10, max_length=15, description="User's phone number")
    otp: str = Field(..., min_length=6, max_length=6, description="6-digit OTP code")

class VerifyRegistrationResponse(BaseModel):
    message: str
    success: bool = True

class LoginRequest(BaseModel):
    phone: str = Field(..., min_length=10, max_length=15, description="User's phone number")
    otp: str = Field(..., min_length=6, max_length=6, description="6-digit OTP code")

class LoginResponse(BaseModel):
    message: str
    token: str
    success: bool = True

class VerifyLoginRequest(BaseModel):
    phone: str = Field(..., min_length=10, max_length=15, description="User's phone number")
    otp: str = Field(..., min_length=6, max_length=6, description="6-digit OTP code")

class VerifyLoginResponse(BaseModel):
    message: str
    token: str
    success: bool = True

class ErrorResponse(BaseModel):
    error: str
    details: Optional[str] = None
    success: bool = False 