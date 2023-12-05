import LabeledInput from "./labeledInput";
import DataButtons from "./dataButtons";

export default function ProfessionalArea(props) {
    const { data, setData, index, setIndex, pushData, setPushData } = props;


    return (
        <>
        <LabeledInput label="Company name"
                    value={data}
                    setValue={setData}
                    field="companyName"
                    id="companyName"/>
        <LabeledInput label="Position title"
                    value={data}
                    setValue={setData}
                    field="positionTitle"
                    id="positionTitle"/>
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
        <LabeledInput label="Description"
                    value={data}
                    setValue={setData}
                    field="description"
                    id="description"
                    type="textArea"/>
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