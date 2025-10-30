// src/app/api/products/route.js
// API route returning JSON

export async function GET() {
    const products = [
        { id: 1, name: 'Laptop', price: 1000, category: 'Electronics', stock: 5 },
        { id: 2, name: 'Smartphone', price: 800, category: 'Electronics', stock: 10 },
        { id: 3, name: 'Headphones', price: 50, category: 'Electronics', stock: 20 },
        { id: 4, name: 'T-shirt', price: 20, category: 'Clothing', stock: 15 },
        { id: 5, name: 'Jeans', price: 60, category: 'Clothing', stock: 8 },
        { id: 6, name: 'Shoes', price: 80, category: 'Clothing', stock: 12 },
        { id: 7, name: 'Dresser', price: 300, category: 'Furniture', stock: 3 },
        { id: 8, name: 'Table', price: 200, category: 'Furniture', stock: 6 },
        { id: 9, name: 'Chair', price: 100, category: 'Furniture', stock: 10 },
        { id: 10, name: 'Bed', price: 500, category: 'Furniture', stock: 2 },
        { id: 11, name: 'Banana', price: 1, category: 'Produce', stock: 100 },
        { id: 12, name: 'Apple', price: 2, category: 'Produce', stock: 50 },
    ];

    return Response.json(products);
}