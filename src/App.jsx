import './App.css';
import SelectButton from './components/button';
import { useState } from 'react';
import LabeledInput from './components/input';
import BasicArea from './components/basicArea';
import { basicDemo, basicTemplate } from './data/basicData';

export default function App () {
    const [currentEditPanel, setCurrentEditPanel] = useState(0);
    const [basicData, setBasicData] = useState(basicDemo);
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
                {currentEditPanel === 0 ?
                    <BasicArea 
                    data={ basicData }
                    setData={ setBasicData }/>
                : currentEditPanel === 1 ?
                    <LabeledInput label="teste2"/>
                : currentEditPanel === 2 ?
                    <LabeledInput label="teste3"/>
                : <div> Invalid ID </div>}
            </div>
            
        </div>
        <div className='panel-view'>
            Nome: { basicData.name }<br/>
            Email: { basicData.email }<br/>
            Celular: { basicData.phoneNumber }<br/>
            Endereço: { basicData.address }<br/>
            Description: { basicData.description }
        </div>
        </>
    )
}