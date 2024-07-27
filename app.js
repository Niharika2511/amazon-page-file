document.addEventListener('DOMContentLoaded', () => {
    // Fetch products from the server
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        // Update the product-list div with product information
        const productContainer = document.getElementById('product-list');
  
        products.forEach(product => {
          const productElement = document.createElement('div');
          productElement.className = 'product';
          productElement.innerHTML = `
            <img src="${product.image}" alt="Product Image">
            <p class="cost">$${product.price}</p>
            <p>${product.description}</p>
          `;
          productContainer.appendChild(productElement);
        });
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  });
  
  
  //ANOTHER CODE:-
  //   .then(function(response) {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then(function(products) {
  //     console.log(products);
  //   })
  //   .catch(function(error) {
  //     console.error('Fetch error:', error);
  //   });
//   this one both are same or not