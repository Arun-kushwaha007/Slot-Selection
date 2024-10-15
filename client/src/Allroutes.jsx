import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddBatch from './pages/Addbatch/Addbatch';
import Auth from './pages/Auth/Auth';
import AuthMentor from './pages/Auth/AuthMentor';
import Batch from './pages/Batches/Batch';
import Displaybatch from './pages/Batches/DisplayBatches';
import Tags from './pages/Tags/Tags';
import Users from './pages/Users/Users';
import Userprofile from './pages/Userprofile/Userprofile';
import Mentors from './pages/Users/Mentors';
import Payment from './pages/Payment/Payment';
import Resources from './pages/Resources/Resources';
import Contact from './pages/Contact/Contact';

function Allroutes({ slidein, handleslidein }) {
  return (
    <Routes>
        <Route path='/' element={<Home slidein={slidein} handleslidein={handleslidein}/>}/>
        <Route path='/AddBatch' element={<AddBatch />}/>
        <Route path='/Auth' element={<Auth />}/>
        <Route path='/AuthMentor' element={<AuthMentor />}/>

        <Route path='/Batch' element={<Batch slidein={slidein} handleslidein={handleslidein}/>}/>
        <Route path='/Batch/:id' element={<Displaybatch slidein={slidein} handleslidein={handleslidein}/>}/>
        <Route path='/Mentor' element={<Tags slidein={slidein} handleslidein={handleslidein}/>}/>

        <Route path='/Users' element={<Users slidein={slidein} handleslidein={handleslidein}/>}/>
        <Route path='/Mentors' element={<Mentors slidein={slidein} handleslidein={handleslidein}/>}/>
        <Route path='/Resources' element={<Resources slidein={slidein} handleslidein={handleslidein}/>}/>
        <Route path='/Contact' element={<Contact slidein={slidein} handleslidein={handleslidein}/>}/>

        <Route path='/Users/:id' element={<Userprofile slidein={slidein} handleslidein={handleslidein}/>}/>
        <Route path='/payment' element={<Payment />}/>

    </Routes>
  );
}

export default Allroutes;
