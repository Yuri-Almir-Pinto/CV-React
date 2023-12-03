import LabeledInput from "./input";

export default function ProfessionalArea(props) {
    const { data, setData, index } = props;
    return (
        <>
        <LabeledInput label="Company name"
                    value={data}
                    setValue={setData}
                    field="companyName"
                    id="companyName"
                    index={index}/>
        <LabeledInput label="Position title"
                    value={data}
                    setValue={setData}
                    field="positionTitle"
                    id="positionTitle"
                    index={index}/>
        <LabeledInput label="Start Date"
                    value={data}
                    setValue={setData}
                    field="startDate"
                    id="startDate"
                    index={index}/>
        <LabeledInput label="End Date"
                    value={data}
                    setValue={setData}
                    field="endDate"
                    id="endDate"
                    index={index}/>
        <LabeledInput label="Description"
                    value={data}
                    setValue={setData}
                    field="description"
                    id="description"
                    index={index}
                    type="textArea"/>
        </>
    )
}