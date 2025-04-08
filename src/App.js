import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login'; // Import Login component
import Dashboard1 from './components/dashboard1'; // Import Dashboard1 component
import ClientList from './components/client';
import Appointment from './components/appointment';
import Lawyerprofile from './components/lawyerprofile';
import Team from './components/team'
import Income from './components/income';
import Case1 from './components/case';
import Dashboard2 from './components/dashboard2';
import Caselisting from './components/caselisting';
import Casehistory from './components/casehistory';
import Judgeprofile from './components/judgeprofile';
import Hearing from './components/hearing';
import Appointment2 from './components/appointment2';
import Tax from './components/tax';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Set Login component as the default route */}
        <Route path="/dashboard1" element={<Dashboard1 />} /> {/* Set Dashboard1 component */}
        <Route path="/client" element={<ClientList />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/lawyerProfile" element={<Lawyerprofile />} />
        <Route path="/team" element={<Team/>} />
        <Route path='/income' element={<Income/>} />
        <Route path='/case' element={<Case1/>}/>
        <Route path='/caselisting' element={<Caselisting/>}/>
        <Route path='/casehistory' element={<Casehistory/>}/>
        <Route path='/dashboard2' element={<Dashboard2 />} />
        <Route path="/judgeprofile" element={<Judgeprofile />} />
        <Route path='/hearing' element={<Hearing/>}/>
        <Route path="/appointment2" element={<Appointment2 />}></Route>
        <Route path="/tax" element={<Tax/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
