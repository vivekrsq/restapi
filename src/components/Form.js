import React, { useState } from 'react';
import logo from './profile-logo.jpg';

function Form() {
    const [values, setValues] = useState({
        name: "",
        class: "",
        email: ""
    });
    
    let handleChange = (e)=> {
        setValues(()=>{
            return{
                ...values,
                [e.target.id]: e.target.value,
            }
        } 
        );
    }
    
    let onSubmit = (e)=>{
        e.preventDefault();
        console.log(values);
        fetch('http://localhost:3001/students', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(values)
          }).then(res => res.json()).then(data => console.log(data));
          
        
        // const response = postData();
        // console.log(response);
    }


    return (
        <div className="container w-25 p-3 my-4 border border-primary">
            <img src={logo} className="rounded mx-auto d-block w-25" alt="profile-image"></img>
            <form>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control border border-primary" value={values.password} onChange={handleChange} id="name"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="class" className="form-label">Class</label>
                    <input type="text" className="form-control border border-primary" value={values.password} onChange={handleChange} id="class"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control border border-primary" value={values.email} onChange={handleChange} id="email" aria-describedby="emailHelp"/>
                        
                </div>
                
                
                <button type="submit" className="btn btn-primary w-100" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Form;
