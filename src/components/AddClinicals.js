import React, { useState } from 'react'
import axios from 'axios'; 

function AddClinicals(props) {

    const [cmponentvalue, setComponentvalue] = useState('');
    const [firstcomponentName, setFirstcomponentName] = useState(''); 

    function handleSubmit(event){
        event.preventDefault(); 
        const data = { 
            //patient : props.match.params.patientId,
            firstcomponentName :firstcomponentName,
            cmponentvalue:cmponentvalue
        }
        axios.post('http://localhost:8000/clinicalsapi/clinicals', data).then(res=>{
            //history.push('/');
        })
    }
    return (
        <div>
        <h2>Add Clinical Data  </h2>
        <form>
            <div className="field">
                <label>Clinical entry type</label>
                 <select onChange={e=>setFirstcomponentName(e.target.value)}>
                     <option value="BP">BP</option>
                     <option value="Hw">height/wight</option>
                     <option value="heartrate">Heart Rate</option> 
                 </select>
            </div>
            <div className="field">
                <label>value</label>
                <input type="text" name="componentvalue" onChange={e=>setComponentvalue(e.target.value)} />
            </div>
             
            <button onClick={handleSubmit.bind(this)}>submit</button>
        </form>
        </div>
    )
}

export default AddClinicals
