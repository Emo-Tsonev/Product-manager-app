
import ProductPage from "../components/products/ProductPage";
import ProductsAllPage from "../components/products/ProductsAllPage";
import CreateProductPage from '../components/products/CreateProductPage'
import UpdateProductPage from "../components/products/UpdateProductPage";



const routes = {
    products: {path: '/products', name: 'Products', includeInNavigation: true , element: <ProductsAllPage />},
    productById: {path: '/products/:productId', name: '', includeInNavigation: false, element: <ProductPage /> },
    createProduct: {path: '/products/create', name: 'Create Product', includeInNavigation: true, element: <CreateProductPage /> },
    updateProduct: {path: '/products/update/:productId', name: '', includeInNavigation: false, element: <UpdateProductPage /> },

    
}

export default routes
