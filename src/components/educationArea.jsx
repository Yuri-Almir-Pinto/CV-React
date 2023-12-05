import LabeledInput from "./labeledInput";
import DataButtons from "./dataButtons";

export default function EducationArea(props) {
    const { data, setData, index, setIndex, pushData, setPushData } = props;
    return (
        <>
        <LabeledInput label="Institution"
                    value={data}
                    setValue={setData}
                    field="institution"
                    id="institution"/>
        <LabeledInput label="Field"
                    value={data}
                    setValue={setData}
                    field="field"
                    id="field"/>
        <LabeledInput label="Start Date"
                    value={data}
                    setValue={setData}
                    field="startDate"
                    id="startDate"/>
        <LabeledInput label="End Date"
                    value={data}
                    setValue={setData}
                    field="endDate"
                    id="endDate"/>
        <LabeledInput label="Address"
                    value={data}
                    setValue={setData}
                    field="address"
                    id="address"/>
        <DataButtons
        data = { data }
        setData = { setData }
        index = { index }
        setIndex = { setIndex }
        pushData = { pushData }
        setPushData = { setPushData }/>
        </>
    )
}