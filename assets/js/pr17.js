const catalogElement = document.getElementById('catalog');
const productDetailsElement = document.getElementById('productDetails');

function displayCatalog(products) {
    catalogElement.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image || 'https://via.placeholder.com/200'}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Цена: $${product.price}</p>
        `;
        card.addEventListener('click', () => displayProductDetails(product));
        catalogElement.appendChild(card);
    });
}

function displayProductDetails(product) {
    catalogElement.style.display = 'none';
    productDetailsElement.style.display = 'block';
    productDetailsElement.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.image || 'https://via.placeholder.com/300'}" alt="${product.title}" style="width: 300px; height: auto;">
        <p><strong>Цена:</strong> $${product.price}</p>
        <p><strong>Описание:</strong> ${product.description}</p>
        <button id="backBtn">Назад</button>
    `;

    document.getElementById('backBtn').addEventListener('click', () => {
        productDetailsElement.style.display = 'none';
        catalogElement.style.display = 'flex';
    });
}

fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        const products = data.products.slice(0, 15);
        displayCatalog(products);
    })
    .catch(error => console.error('Ошибка при получении данных:', error));
