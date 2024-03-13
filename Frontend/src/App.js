import Home from './components/Home';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from './components/CreateEvent';
import BrowseEvent from './components/BrowseEvent';
import React from 'react'
import SignUp from './components/LoginSignup/SignUp';
import Login from './components/LoginSignup/Login';
import Dashboard from './components/Dashboard';
import Forgotpass from './components/LoginSignup/Forgotpass';
import UpdateProfile from './components/UpdateProfile';
import RegisterEvent from './components/RegisterEvent';

import EditEvent from './components/EditEvent';
// import AlreadyReg from './components/AlreadyReg';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/browse" element={<BrowseEvent/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/forgotpass" element={<Forgotpass/>}/>
          <Route path="/update-profile" element={<UpdateProfile/>}/>
          <Route path="/register" element={<RegisterEvent/>} /> 
          <Route path="/edit" element={<EditEvent/>} />
          {/* <Route path="/create" element={<CreateEvent />} />
          <Route path="/browse" element={<BrowseEvent />}></Route>
          <Route path="/faqs" element={<Faqs />}></Route>
          <Route path="/team" element={<Team />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
