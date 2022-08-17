import React from 'react';
import { useState } from "react";
import Axios from 'axios'
function Home() {
    const url = "https://reqres.in/api/users/createdAt"
    const initialValue = {
        email: "",
        fname: "",
        lname: "",
        number: "",
    } 
    const [data, setData] = useState(initialValue);
    const InputEvent = (event) => {
    const {name, value} = event.target;
    console.log(name,'--------------')
    setData((preVal) => {
        return{
            ...preVal,[name]:value, 
        }
    }); 
    };
    const formSubmit = (e) => {
        e.preventDefault();
        Axios.post(url, {
            email:data.email,
            fname:data.fname,
            lname:data.lname,
            number:data.number
        }).then(res =>{
            console.log(res.data);
            setData(initialValue)
        }).catch((error) => {
            console.log(error);
        })
    };
    return (
        <div className='formConatibner'>
             <div className='container'>
                <form onSubmit={formSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name='email' value={data.email} onChange={InputEvent} placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" name='fname' value={data.fname} onChange={InputEvent} placeholder="Frist Name" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" name='lname' value={data.lname} onChange={InputEvent} placeholder="Last Name" />
                    </div>
                    <div className="form-group">
                        <label>Number</label>
                        <input type="number" className="form-control" name='number' value={data.number} onChange={InputEvent} placeholder="Number" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default Home;