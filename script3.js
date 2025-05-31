// Sample data for men's clothes
const products = [
    {
        id: 1,
        name: "Men's Jacket",
        price: 1999,
        image: "https://via.placeholder.com/200x200?text=Men's+Jacket",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Blue", "Gray"],
    },
    {
        id: 2,
        name: "Casual Shirt",
        price: 999,
        image: "https://via.placeholder.com/200x200?text=Casual+Shirt",
        sizes: ["M", "L"],
        colors: ["White", "Blue"],
    },
    {
        id: 3,
        name: "Jeans",
        price: 1499,
        image: "https://via.placeholder.com/200x200?text=Jeans",
        sizes: ["32", "34", "36"],
        colors: ["Blue", "Black"],
    },
];

// DOM Elements
const productGrid = document.getElementById("productGrid");
const productModal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

// Display Products
function displayProducts() {
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="viewProduct(${product.id})">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">₹${product.price}</div>
                <div class="product-actions">
                    <button class="action-btn wishlist" onclick="addToWishlist(${product.id})">❤️ Wishlist</button>
                    <button class="action-btn buy" onclick="viewProduct(${product.id})">Buy Now</button>
                </div>
            </div>
        `;

        productGrid.appendChild(productCard);
    });
}

// View Product Details
// View Product Details in a New Tab
function viewProduct(productId) {
    const product = products.find((p) => p.id === productId);

    // Serialize product data and open in a new tab
    const productData = encodeURIComponent(JSON.stringify(product));
    const newTabUrl = `product-details.html?product=${productData}`;
    window.open(newTabUrl, "_blank");
}


// Close Modal
closeModal.addEventListener("click", () => {
    productModal.style.display = "none";
});

// Wishlist Functionality
function addToWishlist(productId) {
    const product = products.find((p) => p.id === productId);
    alert(`${product.name} has been added to your wishlist!`);
}

// Initialize Products
displayProducts();

