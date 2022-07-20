import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { useState } from 'react';

const initialFormsState = {
    symptoms: {
        name: 'symptoms',
        label: 'If you have problems with pain/aches, stiffness, weakness or functional problems, describe this/these below. (List the symptoms in descending order with the most troublesome first)',
        value: '',
    },
    beenDiagnosedBefore: {
        name: 'beenDiagnosedBefore',
        label: 'Have you been diagnosed with this problem?',
        value: '',
    },
    afterPhysicalTrauma: {
        name: 'afterPhysicalTrauma',
        label: 'Did the problem after a physical trauma?',
        value: '',
    },
    afterMentalTrauma: {
        name: 'afterMentalTrauma',
        label: 'Did the probem start after a mental trauma?',
        value: '',
    },
    frequency: {
        name: 'frequency',
        label: 'How often do you experience the problem?',
        value: '',
    },
    when: {
        name: 'when',
        label: 'When do you experience the problem?',
        value: '',
    },
    intensity: {
        name: 'intensity',
        label: 'How intense is the experience of the problem on the average on a 1-10 scale?',
        value: '',
    }
}

function App() {
    const [fromsArray, setFormArray] = useState([initialFormsState]);
    const [viewTable, setViewTable] = useState(false);

    const handleInput = (e, i) => {
        const newFormsArray = JSON.parse(JSON.stringify(fromsArray));
        const {name, value} = e.target;

        newFormsArray[i][name].value = value;
        setFormArray(newFormsArray);
    }

    const addForm = () => {
        const newFormsDataArray = JSON.parse(JSON.stringify(fromsArray));
        setFormArray([...newFormsDataArray, initialFormsState]);
    }
 
    return (
        <div className="App">
            <div className="container">
                <header>
                    <h1>Pain &amp; Functional Description</h1>
                    <p>The description of the current situation gives your Optimum Trainer a picture of and clues to the underlying causes of your problems</p>
                </header>

                {viewTable ? (
                    <Table dataArray={fromsArray}/>
                ) : (
                    <>
                        <div className="forms-wrap">
                            {fromsArray.map((singleForm, index) => (
                                <Form key={index} index={index} data={singleForm} handleInput={handleInput}/>
                            ))}
                        </div>
                        <div className="add-form-btn-wrap">
                            <button onClick={addForm} className="fas fa-plus add-form-btn"></button>
                        </div>
                    </>
                )}

                <div className="next-back-buttons-wrap">
                    <button 
                        onClick={() => {setViewTable(false)}}
                        className={!viewTable ? "disabled" : ""}
                    >BACK</button>
                    <button 
                        onClick={() => {setViewTable(true)}}
                        className={viewTable ? "disabled" : ""}
                    >NEXT</button>
                </div>
            </div>
        </div>
    );
}

export default App;
