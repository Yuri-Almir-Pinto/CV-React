import './input.css'
/**
 * Expects plain objects, or normal arrays, or arrays that contain ONLY plain objects.
 * @param {*} props 
 */
export default function LabeledInput(props) {
    const { label, type, value, setValue, field, index, id } = props;
    function handleInputLocation(input) {
        if (field == null && index == null)
            return input;
        else {
            if (field == null && index != null)
                return input[field];
            else if (index == null && field != null)
                return input[field];
            else if (index != null && field != null)
                return input[index][field];
        }
    }
    function handleSaveLocation(input) {
        debugger;
        if (field == null && index == null)
            return input;
        else {
            let obj = structuredClone(value);
            if (field == null && index != null) {
                obj[index] = input;
                return obj;
            }
            else if (index == null && field != null) {
                obj[field] = input;
                return obj;
            }
            else if (index != null && field != null) {
                obj[index][field] = input;
                return obj;
            }
        }
    }

    function changeHandler(e) {
        setValue(handleSaveLocation(e.target.value));
    }

    return (
        <div className="container">
            <label htmlFor={id}>{label}</label>
            {type !== "textArea" ?
                <input 
                type={ type ? type : "text"}
                value={ handleInputLocation(value) }
                onChange={(e) => {changeHandler(e)}}
                id={id}/>
            : type === "textArea" &&
                <textarea
                value={ handleInputLocation(value) }
                onChange={(e) => {changeHandler(e)}}
                rows={9}
                id={id}></textarea>
            }
        </div>
    )
}