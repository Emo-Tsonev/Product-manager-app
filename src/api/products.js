

const apiProducts = {
    getAll: () => {
        return fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .catch((error) => console.log(error))
    },
    getOneProductById: (productId) => {
        return fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .catch((error) => console.log(error))

    },
    createProduct: (title, description, thumbnail, price, brand) => {
        return fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title,
              description,
              brand,
              price,
              thumbnail
              
            })
          }).then(res => res.json())
    },

    updateProduct: (productId, title, description, thumbnail, price, brand) => {
        return fetch(`https://dummyjson.com/products/${productId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                description,
                brand,
                price,
                thumbnail
              
            })
        }).then(res => res.json())
    },

    deleteProduct: (productId) => {
        return fetch(`https://dummyjson.com/products/${productId}`, {
            method: 'DELETE'
        }).then((res)=> res.json())
    }

}

export default apiProducts
