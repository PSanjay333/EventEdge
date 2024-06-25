import React,{useState,useEffect} from 'react'
import AfterLogin from './AfterLogin'
import Greeting from './Greeting'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import "./Events.css"
import UserCreatedEvents from './UserCreatedEvents';
import UserRegEvents from './UserRegEvents';
import UserProfile from './UserProfile';
// import CreateEvent from './CreateEvent';

const Dashboard = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/myprofile',{
      headers:{
        'x-token':localStorage.getItem('token')
      }
    }).then(res => {setData(res.data);})
  },[data])
  if(!localStorage.getItem('token')){
    return <Navigate to="/signin"/>
  }
  return (
    <div>
      <AfterLogin/>
      <Greeting message={data}/>
      <UserProfile message={data}/>
      <UserCreatedEvents/>
      <UserRegEvents/>
    </div>
  )
}

export default Dashboard