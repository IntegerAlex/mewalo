export interface Product {
    product_id: string,
   name: string,
    category: string,
    subcategory: string,
    price: string,
    discount: number,
    weight: string
    image: string
    instock:boolean,
    coupon?: string, //optional
    offer: string,
    delivery_info: string,
}