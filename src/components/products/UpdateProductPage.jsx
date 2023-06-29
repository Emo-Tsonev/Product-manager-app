import { useState, useEffect } from "react"
import apiProducts from "../../api/products"
import { useNavigate } from "react-router"
import routes from "../../utils/constants"
import { useParams } from 'react-router'
import CreateUpdateMovie from "../common/CreateUpdateProduct"

const UpdateProductPage = () => {

    const params = useParams()
    const [product, setProduct] = useState(null)
    const navigate = useNavigate()  
    
    

    useEffect(() => {
        apiProducts.getOneProductById(params.productId)
        .then((data)=> setProduct(data))
    },[params.productId])

    
  
    
    const onSubmit = async (formValue) => {
        try {
            
            const newProduct = await apiProducts.updateProduct(params.productId, formValue.title, formValue.description,
                formValue.thumbnail, formValue.price, formValue.brand)
                localStorage.setItem('product', JSON.stringify(newProduct))
                localStorage.setItem('action', 'update')

                navigate(routes.products.path )    
        } catch (error) {
            console.log(error);
        }
    }
    
    if(!product) {
        return <h1>Loading...</h1>
    }

    return <div>
            <CreateUpdateMovie onSubmit={onSubmit} product={product} title={`Update ${product.title}`}/>
    </div>
}

export default UpdateProductPage
