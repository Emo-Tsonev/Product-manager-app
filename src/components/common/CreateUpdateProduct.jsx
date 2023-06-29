import { useState } from "react"
import Input from "../common/Input"
import TextArea from "../common/TextArea"
import styles from './CreateUpdateProduct.module.css'

const CreateUpdateMovie = (props) => {

    const { onSubmit, product, title } = props

    const [formValue, setFormValue] = useState({
        title: product?.title || '', 
        description: product?.description || '', 
        thumbnail: product?.thumbnail || '', 
        price: product?.price || '', 
        brand: product?.brand || ''})


    const onSubmitForm = async (event) => {
        event.preventDefault()
        onSubmit(formValue)
       
    }

    const onChangeValue = (key, value) => {
        setFormValue((prevState)=> ({...prevState, [key]: value}))
    }

    return <div className={styles.wrapper}>
            <h1>{title}</h1>
        <form className={styles.form} onSubmit={onSubmitForm}>
                <Input onChangeValue={onChangeValue} 
                    name='title'
                    placeholder= 'phone'
                    label= 'Product: '
                    value={formValue.title}/>

                <Input onChangeValue={onChangeValue} 
                    name='brand'
                    placeholder= 'Iphone'
                    label= 'Brand: '
                    value={formValue.brand}/>

                <Input onChangeValue={onChangeValue} 
                    name='price'
                    placeholder= '100&#8364;'
                    label= 'Price: '
                    value={formValue.price}/> 

                <Input onChangeValue={onChangeValue} 
                    name='thumbnail'
                    placeholder= 'link'
                    label= 'Thumbnail: '
                    value={formValue.thumbnail}/>

                <TextArea onChangeValue={onChangeValue} 
                    name='description'
                    placeholder= 'About'
                    label= 'Description: '
                    value={formValue.description}/>         

                <button className={styles.submit} type="submit">Save</button>
            </form>
    </div>
}

export default CreateUpdateMovie
