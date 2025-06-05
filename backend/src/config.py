import os
from typing import Optional

class Config:
    """Base configuration class"""
    
    # Flask settings
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key-change-in-production')
    DEBUG = os.getenv('DEBUG', 'False').lower() == 'true'
    
    # Database settings
    DATABASE_URL = os.getenv('DATABASE_URL', 'postgresql://localhost/mewalo_dev')
    
    # JWT settings
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'jwt-secret-change-in-production')
    JWT_EXPIRATION_HOURS = int(os.getenv('JWT_EXPIRATION_HOURS', '24'))
    
    # SMS settings
    SMS_PROVIDER = os.getenv('SMS_PROVIDER', 'dummy')
    SMS_API_KEY = os.getenv('SMS_API_KEY')
    SMS_SENDER_ID = os.getenv('SMS_SENDER_ID', 'MEWALO')
    
    # OTP settings
    OTP_LENGTH = int(os.getenv('OTP_LENGTH', '6'))
    OTP_EXPIRATION_MINUTES = int(os.getenv('OTP_EXPIRATION_MINUTES', '5'))
    
    # Logging
    LOG_LEVEL = os.getenv('LOG_LEVEL', 'INFO')

class DevelopmentConfig(Config):
    """Development configuration"""
    DEBUG = True
    DATABASE_URL = os.getenv('DATABASE_URL', 'postgresql://localhost/mewalo_dev')

class ProductionConfig(Config):
    """Production configuration"""
    DEBUG = False
    # Ensure required environment variables are set in production
    
class TestingConfig(Config):
    """Testing configuration"""
    TESTING = True
    DATABASE_URL = os.getenv('TEST_DATABASE_URL', 'postgresql://localhost/mewalo_test')

def get_config() -> Config:
    """Get configuration based on environment"""
    env = os.getenv('FLASK_ENV', 'development').lower()
    
    if env == 'production':
        return ProductionConfig()
    elif env == 'testing':
        return TestingConfig()
    else:
        return DevelopmentConfig() 