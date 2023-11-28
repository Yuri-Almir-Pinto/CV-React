import LabeledInput from "./input";

export default function BasicArea(props) {
    const { data, setData } = props;
    return (
        <>
        <LabeledInput label="Name"
                    value={data}
                    setValue={setData}
                    field="name"
                    id="name"/>
        <LabeledInput label="Email"
                    value={data}
                    setValue={setData}
                    field="email"
                    id="email"/>
        <LabeledInput label="Phone Number"
                    value={data}
                    setValue={setData}
                    field="phoneNumber"
                    id="phoneNumber"/>
        <LabeledInput label="Address"
                    value={data}
                    setValue={setData}
                    field="address"
                    id="address"/>
        <LabeledInput label="Description"
                    value={data}
                    setValue={setData}
                    field="description"
                    type="textArea"
                    id="description"/>
        </>
    )
}