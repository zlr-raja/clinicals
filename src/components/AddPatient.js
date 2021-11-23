import React, { useState } from 'react'
import axios from 'axios'; 

function AddPatient() {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState(''); 

    function handleSubmit(event){
        event.preventDefault();
        const patientData = {
            firstName :firstName,
            lastName:lastName,
            age:age,
            address:address
        } 
        axios.post('http://localhost:8000/clinicalsapi/patients', patientData).then(res=>{
            //history.push('/');
        })
    }
    return (
        <div>
        <h2>Create Patient</h2>
        <form>
            <div className="field">
                <label>First Name</label>
                <input type="text" name="firstName" onChange={e=>setFirstname(e.target.value)} />
            </div>
            <div className="field">
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={e=>setLastName(e.target.value)} />
            </div>
            <div className="field">
                <label>Age</label>
                <input type="text" name="age" onChange={e=>setAge(e.target.value)} />
            </div>
            <div className="field">
                <label>Address</label>
                <input type="text" name="address" onChange={e=>setAddress(e.target.value)} />
            </div>
            <button onClick={handleSubmit.bind(this)}>submit</button>
        </form>
        
        </div>
    )
}

export default AddPatient
