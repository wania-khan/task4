import React, { useEffect, useState } from 'react';
import './App.css';
import {empData} from './emp.js';
import { BsFillTrashFill, BsFillEyeFill, BsFillPencilFill } from 'react-icons/bs';
import ViewModal from './ViewModal.js';

function App() {
  const [data, setData]=useState([]);
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [phone, setPhone]=useState('');
  const [id, setId]=useState(0);
  const [isViewing, setIsViewing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() =>{setData(empData)}, []);
  
  const handleEdit=(id)=>{
    const dt=data.filter(item => item.id===id)
    if (dt.length > 0) { // Check if data exists before accessing
      setId(dt[0].id);
      setName(dt[0].name);
      setEmail(dt[0].email);
      setPhone(dt[0].phone);
    } else {
      console.error("Error: User data not found for id:", id);
    }
  
  }
  const handleView = (id) => {
    console.log("Viewing user with ID:", id);
    const dt = data.filter(item => item.id === id);
    if (dt.length > 0) {
      setSelectedUser(dt[0]);
      setIsViewing(true);
      console.log("Checking /// User data found:", dt[0]);
    } else {
      console.error("Error: User data not found for id:", id);
    }
  };
  
  const handleCloseModal = () => {
    console.log("Closing modal");
    setIsViewing(false);
    setSelectedUser(null);
  };
  const handleDelete=(id)=>{
    if(id>0){
      if(window.confirm("Are you sure you want to delete the following data?")){
        const dt= data.filter(item => item.id !== id)
        setData(dt);
      }
    }
    const handleSubmit = (e) => {
      e.preventDefault();  
      // Implement logic to handle form submission (e.g., update data, API call)
      console.log("Submitted data:", name, email, phone);
      // Optionally, reset form fields after submission
      setName('');
      setEmail('');
      setPhone('');
    };
     
  }
  return (
    <div className="App">
      <div className="form-container" onSubmit={handleSubmit}>
        <form className="form-group">
          <center><p><b>USER FORM</b></p></center>
          <div className="form-group">
            <label>Name</label>
            <br />
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)} disabled={!isViewing}  style={{width:"100%"}}/>
            <br />
          </div>
          <div className="form-group">
            <label>Email</label>
            <br />
            <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} disabled={!isViewing} style={{width:"100%"}}/>
            <br />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <br />
            <input type='text' value={phone} onChange={(e)=> setPhone(e.target.value)} disabled={!isViewing} style={{width:"100%"}}/>
            <br />
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
<br></br>
<div className="div1">
<div className="container">
  <div className="left">
    <p><b>REACT CRUD</b></p>
  </div>
  <div className="right">
    <p><b>HOME | CREATE USER | SHOW USER</b></p>
  </div>
</div>

        <table className='table table-hover'>
          <thead>
            <tr>
              <td><b>ID</b></td>
              <td><b>Name</b></td>
              <td><b>E-mail</b></td>
              <td><b>Phone</b></td>
              <td><b>Actions</b></td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "light-row" : "dark-row"}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td className='icons'>
                  <BsFillPencilFill onClick={(e)=> handleEdit(item.id)} />&nbsp;
                  <BsFillEyeFill onClick={(e)=> handleView(item.id)}/>&nbsp;
                  <BsFillTrashFill onClick={(e)=> handleDelete(item.id)}/>&nbsp;
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isViewing && selectedUser && (
      <ViewModal user={selectedUser} onClose={handleCloseModal} />
    )}
    </div>
  );
}

export default App;
