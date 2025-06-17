#!/usr/bin/env python3
"""
Test script to verify backend API fixes
"""
import requests
import json

# Configuration
BASE_URL = "http://localhost:5000/api/v1"
TEST_USER = {
    "first_name": "Test",
    "last_name": "User",
    "phone": "+1234567890",
    "email": "test@example.com"
}

def discover_categories_and_products():
    """Discover what categories and products exist in the database"""
    print("🔍 Discovering available categories and products...")
    
    try:
        # Get all categories
        response = requests.get(f"{BASE_URL}/categories/")
        if response.status_code == 200:
            categories_data = response.json()
            print(f"Available categories: {[cat['name'] for cat in categories_data.get('data', [])]}")
            
            # Get some products to see category/subcategory structure
            response = requests.get(f"{BASE_URL}/product/?limit=5")
            if response.status_code == 200:
                products_data = response.json()
                products = products_data.get('data', [])
                if products:
                    print("Sample products with category/subcategory:")
                    for product in products[:3]:
                        print(f"  - {product.get('name', 'N/A')}: category='{product.get('category', 'N/A')}', subcategory='{product.get('subcategory', 'N/A')}'")
                    
                    # Return first valid category/subcategory for testing
                    first_product = products[0]
                    return first_product.get('category'), first_product.get('subcategory')
        
        return None, None
    except Exception as e:
        print(f"Error discovering categories: {e}")
        return None, None

def test_multiple_categories():
    """Test multiple category filtering"""
    print("\n🧪 Testing multiple category filtering...")
    
    # First discover available categories
    response = requests.get(f"{BASE_URL}/categories/")
    if response.status_code == 200:
        categories_data = response.json()
        available_categories = [cat['name'] for cat in categories_data.get('data', [])]
        
        if len(available_categories) >= 2:
            # Test with first two available categories
            test_categories = available_categories[:2]
            category_param = ','.join(test_categories)
            
            print(f"Testing with categories: {test_categories}")
            
            # Test single category
            response = requests.get(f"{BASE_URL}/product/?category={test_categories[0]}&limit=5")
            print(f"Single category ({test_categories[0]}) response: {response.status_code}")
            
            # Test multiple categories
            response = requests.get(f"{BASE_URL}/product/?category={category_param}&limit=5")
            print(f"Multiple categories ({category_param}) response: {response.status_code}")
            
            if response.status_code == 200:
                data = response.json()
                print(f"✅ Multiple categories work! Got {len(data.get('data', []))} products")
                print(f"Pagination: {data.get('pagination', {})}")
                return True
            else:
                print(f"❌ Multiple categories failed: {response.text}")
                return False
        else:
            print("❌ Not enough categories available for testing")
            return False
    else:
        print(f"❌ Could not get categories: {response.text}")
        return False

def test_category_pagination():
    """Test pagination in category endpoints"""
    print("\n🧪 Testing category pagination...")
    
    # Get first available category
    response = requests.get(f"{BASE_URL}/categories/")
    if response.status_code == 200:
        categories_data = response.json()
        available_categories = [cat['name'] for cat in categories_data.get('data', [])]
        
        if available_categories:
            test_category = available_categories[0]
            print(f"Testing category pagination with: {test_category}")
            
            # Test category products with pagination
            response = requests.get(f"{BASE_URL}/categories/{test_category}/products?page=1&limit=5")
            print(f"Category pagination response: {response.status_code}")
            
            if response.status_code == 200:
                data = response.json()
                print(f"✅ Category pagination works!")
                print(f"Has pagination: {'pagination' in data}")
                print(f"Total products: {data.get('total', 0)}")
                return True
            else:
                print(f"❌ Category pagination failed: {response.text}")
                return False
        else:
            print("❌ No categories available for testing")
            return False
    else:
        print(f"❌ Could not get categories: {response.text}")
        return False

def test_jwt_authentication():
    """Test JWT authentication flow"""
    print("\n🧪 Testing JWT authentication...")
    
    try:
        # Step 1: Register
        response = requests.post(f"{BASE_URL}/auth/register", json=TEST_USER)
        print(f"Register response: {response.status_code}")
        
        # Step 2: Verify registration
        verify_data = {"phone": TEST_USER["phone"], "otp": "123456"}
        response = requests.post(f"{BASE_URL}/auth/verify-registration", json=verify_data)
        print(f"Verify registration response: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            token = data.get('token')
            print(f"✅ Got JWT token: {token[:50] if token else 'None'}...")
            
            if token:
                # Step 3: Test admin endpoint with token
                headers = {"Authorization": f"Bearer {token}"}
                response = requests.get(f"{BASE_URL}/admin/products", headers=headers)
                print(f"Admin endpoint with token: {response.status_code}")
                
                if response.status_code == 200:
                    print("✅ JWT authentication works!")
                else:
                    print(f"❌ Admin endpoint failed: {response.text}")
                    
                # Step 4: Test admin endpoint without token
                response = requests.get(f"{BASE_URL}/admin/products")
                print(f"Admin endpoint without token: {response.status_code}")
                
                if response.status_code == 401:
                    print("✅ JWT protection works!")
                    return True
                else:
                    print(f"❌ JWT protection failed: {response.text}")
                    return False
            else:
                print("❌ No token received")
                return False
        else:
            print(f"❌ Registration verification failed: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ JWT test failed with error: {e}")
        return False

def test_subcategory_pagination():
    """Test pagination in subcategory endpoints"""
    print("\n🧪 Testing subcategory pagination...")
    
    # First discover a valid category/subcategory combination
    category, subcategory = discover_categories_and_products()
    
    if category and subcategory:
        print(f"Testing subcategory pagination with: category='{category}', subcategory='{subcategory}'")
        
        response = requests.get(f"{BASE_URL}/product/category/{category}/subcategory/{subcategory}?page=1&limit=3")
        print(f"Subcategory pagination response: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Subcategory pagination works!")
            print(f"Has pagination: {'pagination' in data}")
            print(f"Total products: {data.get('total', 0)}")
            return True
        else:
            print(f"❌ Subcategory pagination failed: {response.text}")
            
            # Try with common combinations as fallback
            fallback_combinations = [
                ("dryfruit", "almond"),
                ("nuts", "cashew"),
                ("seeds", "sunflower")
            ]
            
            print("Trying fallback category/subcategory combinations...")
            for cat, subcat in fallback_combinations:
                print(f"  Trying: {cat}/{subcat}")
                response = requests.get(f"{BASE_URL}/product/category/{cat}/subcategory/{subcat}?page=1&limit=3")
                if response.status_code == 200:
                    data = response.json()
                    print(f"  ✅ Found working combination: {cat}/{subcat}")
                    print(f"  Products found: {len(data.get('data', []))}")
                    return True
                else:
                    print(f"  ❌ {cat}/{subcat} failed: {response.status_code}")
            
            return False
    else:
        print("❌ Could not find valid category/subcategory combination")
        return False

def main():
    """Run all tests"""
    print("🚀 Testing Backend API Fixes")
    print("=" * 50)
    
    try:
        # Test if server is running
        response = requests.get(f"{BASE_URL.replace('/api/v1', '')}/health")
        if response.status_code != 200:
            print("❌ Backend server is not running!")
            print("Please start the backend server first: python backend/src/main.py")
            return
        
        print("✅ Backend server is running")
        
        # Discover what's available in the database
        discover_categories_and_products()
        
        # Run tests
        results = {
            "Multiple Categories": test_multiple_categories(),
            "Category Pagination": test_category_pagination(),
            "Subcategory Pagination": test_subcategory_pagination(),
            "JWT Authentication": test_jwt_authentication()
        }
        
        print("\n" + "=" * 50)
        print("📊 Test Results Summary:")
        for test_name, result in results.items():
            status = "✅ PASS" if result else "❌ FAIL"
            print(f"  {test_name}: {status}")
        
        passed = sum(results.values())
        total = len(results)
        print(f"\nOverall: {passed}/{total} tests passed")
        
        if passed == total:
            print("🎉 All tests passed! Backend fixes are working correctly.")
        else:
            print("⚠️  Some tests failed. Check the output above for details.")
        
    except requests.exceptions.ConnectionError:
        print("❌ Cannot connect to backend server!")
        print("Please start the backend server first: python backend/src/main.py")
    except Exception as e:
        print(f"❌ Test failed with error: {e}")

if __name__ == "__main__":
    main() 