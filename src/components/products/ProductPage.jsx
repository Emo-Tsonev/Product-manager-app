import { useEffect } from "react"
import apiProducts from "../../api/products"
import { useParams,useNavigate } from 'react-router'
import { useState } from "react"
import styles from './ProductPage.module.css'
import routes from "../../utils/constants"
import useDiscount from "../hooks/discountHook"




const ProductPage = () => {

    
    const params = useParams()
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const discount = useDiscount(product?.price, product?.discountPercentage)

    useEffect(() => {
        setIsLoading(true)
        apiProducts.getOneProductById(params.productId)
        .then((data) => setProduct(data))
        .catch((error)=> console.log(error))
        .finally(() => setIsLoading(false))
    },[params.productId])
    
    
   
    const onClickUpdateButton = () => {
        navigate(`/products/update/${product.id}`)
    }

    const onClickDeleteButton = async () => {
    try {
        const newProduct = await apiProducts.deleteProduct(product.id)
        localStorage.setItem('product', JSON.stringify(newProduct))
        localStorage.setItem('action' , 'delete')
        navigate(routes.products.path)
        
    } catch (error) {
        console.log(error);
        }

    }

    if(isLoading || !product) {
        return <p>Loading...</p>
    }


    // "description": "An apple mobile which is nothing like apple",
    //   "price": 549,
    //   "discountPercentage": 12.96,
    //   "rating": 4.69,
    //   "stock": 94,
    //   "brand": "Apple",
    //   "category": "smartphones",

    return <div className={styles.wrapper}>
            <h1>{product.title}</h1>
            <div className={styles.gallery}>
                {product.images.map((img) => 
                    <img className={styles.image} key={img} src={img} alt={product.title}></img>)}
            </div>
            <div>
                <p className={styles.text}>Description: {product.description}</p>
                <p className={styles.text}>Category: {product.category}</p>
                <p className={styles.text}>Brand: {product.brand}</p>
                <p className={styles.text}>Rating: {product.rating}</p>
                <p className={styles.text}>Avaible: {product.stock}</p>
                <p className={styles.text}>Price: {discount}&#8364;</p>
                <p className={styles.text}>DiscountPercentage: {product.discountPercentage}%</p>
                <button onClick={onClickUpdateButton}  className={styles.button}>Update Product</button>
                <button onClick={onClickDeleteButton} className={styles.button}>Delete Product</button>
            </div>
    </div>
}

export default ProductPage
