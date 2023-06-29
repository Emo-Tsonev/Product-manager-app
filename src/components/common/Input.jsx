import { useId } from "react"
import styles from './Input.module.css'

const Input = (props) => {
    const { onChangeValue, type= 'text', name, placeholder, label, value } = props
    const id = useId()

    const onChange = (event) => {
        onChangeValue(event.target.name, event.target.value)
    }

    return <div className={styles.wrapper}>
        <label htmlFor={id}>{label}</label>
        <input onChange={onChange} type={type} name={name} placeholder={placeholder} value={value} />
    </div>
}

export default Input
