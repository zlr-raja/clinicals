
import './App.css'; 
import Home from './components/Home'
import AddPatient from './components/AddPatient'
import AddClinicals from './components/AddClinicals'
import { BrowserRouter, Routes , Route } from 'react-router-dom'

function App() {
  return ( 
    <BrowserRouter>
    <div className="App">  
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/addpatient' element={<AddPatient />}></Route>
          <Route path='/addpatient/:patientId' element={<AddClinicals />}></Route>
        </Routes>    
    </div>
    </BrowserRouter>  
   
  );
}

export default App;
