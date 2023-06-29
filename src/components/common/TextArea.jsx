import { useId } from "react"
import styles from './TextArea.module.css'

const TextArea = (props) => {

    const { onChangeValue, type= 'text', name, placeholder, label, value } = props
    const id = useId()

    const onChange = (event) => {
        onChangeValue(event.target.name, event.target.value)
    }

    return <div className={styles.wrapper}>
            <label htmlFor={id}>{label}</label>
            <textarea onChange={onChange} type={type} name={name} placeholder={placeholder} value={value} />
        </div>
}

export default TextArea
