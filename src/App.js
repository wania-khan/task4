import React, { useEffect, useState } from 'react';
import './App.css';
import {empData} from './emp.js';
import { BsFillTrashFill, BsFillEyeFill, BsFillPencilFill, BsDisplay } from 'react-icons/bs';

function App() {
  const [data, setData]=useState([]);
  useEffect(() =>{
  setData(empData)
  }, []);
  
  const handleEdit=(id)=>{
    alert(id);
  
  }
  const handleView=(id)=>{
    alert(id);
  
  }
  const handleDelete=(id)=>{
    if(id>0){
      if(window.confirm("Are you syre you want to delete the following data?")){
        const dt= data.filter(item => item.id !== id)
        setData(dt);
      }
    }
     
  }
  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'center', margin: '70px 50px'}}>
        <form>
          <caption>USER FORM</caption>
          <label>Name: </label>
        </form>
      </div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>E-mail</td>
            <td>Phone</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index)=>{
            return(
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <BsFillPencilFill onClick={(e)=> handleEdit(item.id)} />&nbsp;
                  <BsFillEyeFill onClick={(e)=> handleView(item.id)}/>&nbsp;
                  <BsFillTrashFill onClick={(e)=> handleDelete(item.id)}/>&nbsp;
                </td>
              </tr>
            )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
