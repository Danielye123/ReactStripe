const productsArray = [
    {
        // not the safe way but this is for learning purposes!
        id: "price_1NWEiZJi7AQWBPC2sbTQYti7",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1NWEjMJi7AQWBPC2IZ81gDNo",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1NWEjwJi7AQWBPC2vn96dKYg",
        title: "Camera",
        price: 45.99
    },
]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined){
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }
    return productData;
}

export { productsArray, getProductData };