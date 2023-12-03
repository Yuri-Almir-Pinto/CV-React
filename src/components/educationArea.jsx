import LabeledInput from "./input";

export default function EducationArea(props) {
    const { data, setData, index } = props;
    return (
        <>
        <LabeledInput label="Institution"
                    value={data}
                    setValue={setData}
                    field="institution"
                    id="institution"
                    index={index}/>
        <LabeledInput label="Field"
                    value={data}
                    setValue={setData}
                    field="field"
                    id="field"
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
        <LabeledInput label="Address"
                    value={data}
                    setValue={setData}
                    field="address"
                    id="address"
                    index={index}/>
        </>
    )
}