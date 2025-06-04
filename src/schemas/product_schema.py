from pydantic import BaseModel, Field, HttpUrl
from typing import Optional

class ProductSchema(BaseModel):
    product_id: str = Field(..., description="Unique product ID")
    name: str = Field(..., description="Product name")
    category: str = Field(..., description="Top-level category, e.g., 'dryfruit' or 'seeds'")
    subcategory: str = Field(..., description="Subcategory, e.g., 'almond'")
    price: float = Field(..., ge=0, description="Product price")
    discount: float = Field(..., ge=0, le=100, description="Discount in percent")
    weight: str = Field(..., description="Weight of the product, e.g., '250g'")
    image: HttpUrl = Field(..., description="Image URL for the product")
    instock: bool = Field(..., description="Is the product in stock?")
    coupon: Optional[str] = Field(None, description="Coupon code")
    offer: Optional[str] = Field(None, description="Special offer")
    delivery_info: Optional[str] = Field(None, description="Delivery information")

    class Config:
        schema_extra = {
            "example": {
                "product_id": "A94ECCA8",
                "name": "Butte",
                "category": "dryfruit",
                "subcategory": "almond",
                "price": 200.0,
                "discount": 10.0,
                "weight": "250g",
                "image": "https://dummyimage.com/600x400/000/fff&text=Butte",
                "instock": True,
                "coupon": "SAVE10",
                "offer": "Buy 1 Get 1",
                "delivery_info": "Delivery within 2-5 days"
            }
        }
