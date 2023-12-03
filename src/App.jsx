import './App.css';
import SelectButton from './components/button';
import { useState } from 'react';
import LabeledInput from './components/input';
import BasicArea from './components/basicArea';
import EducationArea from './components/educationArea';
import { basicDemo, basicTemplate } from './data/basicData';
import { educationDemo, educationTemplate } from './data/educationData';
import { professionalDemo, professionalTemplate } from './data/professionalData';
import ProfessionalArea from './components/professionalArea';
import ShowArea from './components/showArea';

export default function App () {
    const [currentEditPanel, setCurrentEditPanel] = useState(0); // Contains the id of the current edit panel (Left one)
    const [basicData, setBasicData] = useState(basicDemo); // Contains basic user Data
    const [educationData, setEducationData] = useState(educationTemplate); // Contains education user Data
    const [professionalData, setProfessionalData] = useState(professionalDemo)

    const [index, setIndex] = useState(-1); // Contains the index of user education/experience for editing
    return(
        <>
        <div className='panel-edit'>
            <div className='section-buttons'>
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
            <div className="section-edit">
                {currentEditPanel === 0 ? // If current edit panel is set to 0
                    <BasicArea 
                    data = { basicData }
                    setData = { setBasicData }/>
                : currentEditPanel === 1 ? // If current edit panel is set to 1
                    <EducationArea
                    data = { educationData }
                    setData = { setEducationData }
                    index = { 0 }/>
                : currentEditPanel === 2 ? // If current edit panel is set to 2
                    <ProfessionalArea
                    data = { professionalData }
                    setData = { setProfessionalData }
                    index = { 0 }/>
                : <div> Invalid ID </div>}
            </div>
            
        </div>
        <div className='panel-view'>
            <ShowArea
            basicData = { basicData } />
        </div>
        </>
    )
}