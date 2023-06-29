
import apiProducts from "../../api/products"
import { useNavigate } from "react-router"
import routes from "../../utils/constants"
import CreateUpdateProduct from "../common/CreateUpdateProduct"

const CreateProductPage = () => {

    

    const navigate = useNavigate()    
    
    const onSubmit = async (formValue) => {
        try {
            
            const newProduct = await apiProducts.createProduct(formValue.title, formValue.description,
                formValue.thumbnail, formValue.price, formValue.brand)
                localStorage.setItem('product', JSON.stringify(newProduct))
                localStorage.setItem('action', 'create')
                navigate(routes.products.path )    
        } catch (error) {
            console.log(error);
        }
    }
    
    

    return <div>
            <CreateUpdateProduct onSubmit={onSubmit} title='Create Product'/>
    </div>
}

export default CreateProductPage
