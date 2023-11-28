import './input.css'

export default function LabeledInput(props) {
    const { label, type, value, setValue, field, id } = props;
    
    function changeHandler(e) {
        if (!field)
            setValue(e.target.value);
        else {
            let obj = structuredClone(value);
            obj[field] = e.target.value
            setValue(obj);
        }
            
    }

    return (
        <div className="container">
            <label for={id}>{label}</label>
            {type !== "textArea" ?
                <input 
                type={ type ? type : "text"}
                value={ !field ? value : value[field] }
                onChange={(e) => {changeHandler(e)}}
                id={id}/>
            : type === "textArea" &&
                <textarea
                value={ !field ? value : value[field] }
                onChange={(e) => {changeHandler(e)}}
                rows={9}
                id={id}></textarea>
            }
        </div>
    )
}