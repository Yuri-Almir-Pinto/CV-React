import SelectButton from "./button";
import styles from "./dataButtons.module.css"

export default function DataButtons(props) {
    const { data, setData, index, setIndex, pushData, setPushData } = props;

    function getHighestId() {
        let highest = -1;
        for(let i = 0 ; i < pushData.length ; i++) {
            if (pushData[i].id > highest)
                highest = pushData[i].id;
        }
        if (highest === -1 || highest == null)
            return 0;

        return highest + 1;
    }

    function clearData() {
        let newObj = structuredClone(data);
        for (let key in newObj) {
            if (newObj.hasOwnProperty(key))
                newObj[key] = "";
        }
        newObj.id = null

        setData(newObj);

        if (index != null)
            setIndex(null);
    }

    function checkData(newObj) {
        debugger;
        for (let key in newObj) {
            if (newObj.hasOwnProperty(key) && key !== "id" && newObj[key]?.trim() == "")
                return true;
        }

        return false;
    }

    function addData() {
        let pushObj = structuredClone(pushData);
        let dataObj = structuredClone(data);
        if (checkData(dataObj))
            return;

        dataObj.id = getHighestId();

        if (dataObj.id !== 0)
            pushObj.push(dataObj);
        else
            pushObj[0] = dataObj;
        
        setPushData(pushObj);

        clearData();
    }

    function editData() {
        let pushObj = structuredClone(pushData);
        let dataObj = structuredClone(data);
        if (checkData(dataObj))
            return;

        pushObj[index] = dataObj;
        setPushData(pushObj);

        clearData();
    }

    return (
        <>
        <div className={styles.buttons}>
            {index != null && 
            <SelectButton
                customStyle={styles.deleteButton}
                clickHandler={() => { clearData() }}
                styleId="clear">
                Clear
            </SelectButton>
            }
            <SelectButton 
            customStyle={index == null ? `${styles.addButton}` : `${styles.saveButton}`}
            clickHandler={ index == null ? () => { addData() } : () => { editData() }}
            styleId={ index == null ? "add" : "edit"}>
                {index == null ? "Add" : "Edit"}
            </SelectButton>
        </div>
        </>
    )
}