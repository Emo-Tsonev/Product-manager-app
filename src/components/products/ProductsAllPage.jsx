import { useEffect } from "react"
import { useState } from "react"
import apiProducts from "../../api/products"
import ProductItem from "./ProductItem"
import styles from './ProductsAllPage.module.css'


const ProductsAllPage = () => {
    
    const [products, setProducts] = useState([])
    useEffect(() => {
        apiProducts.getAll().then((data)=> {
            const product = localStorage.getItem('product') 
            
            if (product === null) {
                setProducts(data.products)
            } else {

                const action = localStorage.getItem('action')

                switch (action) {
                    case 'create':
                        
                    const parsedProduct = JSON.parse(product) 
                    const newProduct = {...parsedProduct}
                
                    data.products.unshift(newProduct)
                
                    setProducts(data.products)

                    setTimeout(() => {
                    
                    localStorage.removeItem('product')
                    localStorage.removeItem('action')
 
                    }, 5000);

                        break;
                        
                        case 'update':
                
                        const parsedProductUpdate = JSON.parse(product) 
                        const updateProduct = {...parsedProductUpdate}

                        const index = data.products.findIndex((product)=> product.id === updateProduct.id)
                        data.products.splice(index, 1, updateProduct)

                        setProducts(data.products)

                        setTimeout(() => {
                    
                        localStorage.removeItem('product')
                        localStorage.removeItem('action')

                    }, 5000);

                break;

                case 'delete': 

                const parsedProductDelete = JSON.parse(product) 
                const deleteProduct = {...parsedProductDelete}
                
                const deleteIndex = data.products.findIndex((product)=> product.id === deleteProduct.id)
                data.products.splice(deleteIndex, 1)
                
                setProducts(data.products)

                setTimeout(() => {
                    
                    localStorage.removeItem('product')
                    localStorage.removeItem('action')

                }, 5000);

                    break;
                default:
                }

                // const parsedProduct = JSON.parse(product) 
                // const newProduct = {...parsedProduct}
                
                // data.products.unshift(newProduct)
                
                // setProducts(data.products)

                // setTimeout(() => {
                    
                //     localStorage.removeItem('create product', 'update product')
                // }, 5000);
            }
            
        })
    },[])


    return <div>
        <h1>Products:</h1>
        <div className={styles.list}>
            { products ? products.map((product)=> 
                <ProductItem key={product.id} product={product} />) : null}
        </div>
    </div>
}

export default ProductsAllPage
