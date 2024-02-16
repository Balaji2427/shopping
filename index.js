
fetch("https://products-api-2ttf.onrender.com/api/products")
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const image = document.createElement('img');
            image.src = product.image;
            image.alt = product.name;
            image.classList.add('product-image');

            if(product.id == 1) {
                const newEdition = document.getElementById('new-edition');
                newEdition.appendChild(image)
            } else if(product.id == 2) {
                const shirts = document.getElementById('shirts') 
                shirts.appendChild(image)
            } else if(product.id == 3) {
                const hoodiesEl = document.getElementById('hoodies')
                hoodiesEl.appendChild(image)
            }
        })
    })
    .catch(error => console.log(error))

