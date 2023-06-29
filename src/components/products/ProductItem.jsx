import { Link } from 'react-router-dom'
import styles  from './ProductItem.module.css'
const ProductItem = (props) => {

    const { product } = props
    
    return <div className={styles.wrapper}>
        <Link to={`/products/${product.id}`}>
            <p className={styles.text}>{product.title}</p>
            </Link>
            <p className={styles.text}>Brand: {product.brand}</p>
            <img className={styles.thumbnail} src={product.thumbnail} alt={product.title}/>
            <p className={styles.text}>Description: {product.description}</p>
            <p className={styles.text}>Available: {product.stock}</p>
            <p className={styles.text}>Price: {product.price}&#8364;</p>
    </div>
}

export default ProductItem
