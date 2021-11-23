import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react';
import { BrowserRouter, Routes , Route, Link } from 'react-router-dom';

function Home() {

  const [patientData, setPatientData] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8000/clinicalsapi/patients').then(res=>{
        setPatientData(res.data);
    });
  }, patientData); 
    return (
        <div className="box--center-container"> 
          <div className="box-space-between box--header--bg"> 
            <div>First name</div>
            <div>last name</div>
            <div>age</div>
            <div>gender</div>
            <div>Adress</div>
            <div>Action</div>
         </div>
           {patientData.map(patient=> <RowCreator item={patient} />)}
           <Link class="btn" to="/addpatient">Register</Link>
        </div>
    )
}
class RowCreator extends React.Component{
  render(){
    let patient = this.props.item;
    return ( 
      <div> 
     
    <div className="box-space-between"> 
        <div>{patient.firstName}</div>
        <div>{patient.lastName}</div>
        <div>{patient.age}</div>
        <div>{patient.sex}</div>
        <div>{patient.address}</div> 
        <div><Link to={'/addpatient/'+patient._id}>Add Data</Link></div>
      </div>
      </div>
    )
  }
}
export default Home;


