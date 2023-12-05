import styles from './labeledInput.module.css'

/**
 * Expects plain objects, or normal arrays, or arrays that contain ONLY plain objects.
 * @param {*} props 
 */
export default function LabeledInput(props) {
    const { label, type, value, setValue, field, id } = props;

    function handleInputLocation(input) {
        return input[field]
    }
    
    function handleSaveLocation(input) {
        let obj = structuredClone(value);
        obj[field] = input;
        return obj;
    }
    
    function changeHandler(e) {
        setValue(handleSaveLocation(e.target.value));
    }

    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            {type !== "textArea" ?
                <input 
                className={styles.input}
                type={ type ? type : "text"}
                value={ handleInputLocation(value) }
                onChange={(e) => {changeHandler(e)}}
                id={id}/>
            : type === "textArea" &&
                <textarea
                className={styles.textArea}
                value={ handleInputLocation(value) }
                onChange={(e) => {changeHandler(e)}}
                rows={3}
                id={id}></textarea>
            }
        </div>
    )
}