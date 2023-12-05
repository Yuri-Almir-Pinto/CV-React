import styles from './App.module.css';
import SelectButton from './components/button';
import { useState } from 'react';
import LabeledInput from './components/labeledInput';
import BasicArea from './components/basicArea';
import EducationArea from './components/educationArea';
import { basicDemo, basicTemplate, basicEmpty } from './data/basicData';
import { educationDemo, educationTemplate, educationEmpty } from './data/educationData';
import { professionalDemo, professionalTemplate, professionalEmpty } from './data/professionalData';
import ProfessionalArea from './components/professionalArea';
import ShowArea from './components/showArea';
import DataView from './components/dataView';

export default function App () {
    const [currentEditPanel, setCurrentEditPanel] = useState(0);
    const [basicData, setBasicData] = useState(basicEmpty);
    const [educationData, setEducationData] = useState(educationEmpty);
    const [educationEdit, setEducationEdit] = useState(educationTemplate);
    const [educationIndex, setEducationIndex] = useState(null)
    const [professionalData, setProfessionalData] = useState(professionalEmpty);
    const [professionalEdit, setProfessionalEdit] = useState(professionalTemplate);
    const [professionalIndex, setProfessionalIndex] = useState(null);
    return(
        <>
        <div className={styles.panelEdit}>
            <div className={styles.sectionButtons}>
                <SelectButton clickHandler={setCurrentEditPanel} id={0}>
                    Basic
                </SelectButton>
                <SelectButton clickHandler={setCurrentEditPanel} id={1}>
                    Education
                </SelectButton>
                <SelectButton clickHandler={setCurrentEditPanel} id={2}>
                    Experience
                </SelectButton>
            </div>
            <div className={styles.sectionEdit}>
                {currentEditPanel === 0 ? // If current edit panel is set to 0
                    <BasicArea 
                    data = { basicData }
                    setData = { setBasicData }/>
                : currentEditPanel === 1 ? // If current edit panel is set to 1
                    <EducationArea
                    data = { educationEdit }
                    setData = { setEducationEdit }
                    pushData = { educationData }
                    setPushData = { setEducationData }
                    index = { educationIndex }
                    setIndex = { setEducationIndex }/>
                : currentEditPanel === 2 ? // If current edit panel is set to 2
                    <ProfessionalArea
                    data = { professionalEdit }
                    setData = { setProfessionalEdit }
                    pushData = { professionalData }
                    setPushData = { setProfessionalData }
                    index = { professionalIndex }
                    setIndex = { setProfessionalIndex }/>
                : <div> Invalid ID </div>}
            </div>
            
        </div>
        <div className={styles.panelView}>
            <ShowArea
            basicData = { basicData }/>
            { (educationData != null && educationData[0]?.id != null) && 
                <DataView
                data = { educationData }
                setData = { setEducationData }
                setEdit = { setEducationEdit }
                title = "Education"
                type = "education"
                setIndex = { setEducationIndex }
                setCurrentEditPanel = { setCurrentEditPanel }
                currentEditPanel = {1}/>
            }
            { (professionalData != null && professionalData[0]?.id != null) && 
                <DataView
                data = { professionalData }
                setData = { setProfessionalData }
                setEdit = { setProfessionalEdit }
                title = "Professional"
                type = "professional"
                setIndex = { setProfessionalIndex }
                setCurrentEditPanel = { setCurrentEditPanel }
                currentEditPanel = {2}/>
            }
            
        </div>
        </>
    )
}