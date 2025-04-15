import React, { useState } from 'react'
import './form.css'

const FormVal = () => {

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[pwd,setPwd] = useState('');
    const[confirmPwd,setConfirmPwd] = useState('');
    const[age,setAge] = useState('');
    const[gender,setGender] = useState('');
    const[errors,setErrors] = useState('');

    // we can also make a single object with all these values in it. a single state and a singloe function

    function validateForm(){
        const errors = {};
        if(!name){
            errors.name = "name is required";
        }
        if(!email){
            errors.name = "Email is required";
        }else if(! /\S+@\S+\.\S+/.test(email)){
            errors.email= "email is invalid";
        }

        if(!pwd){
            errors.pwd = "Password is required";
        }else if(pwd.length<6){
            errors.pwd = "Password must be of at least 6 digits"
        }

        if(!confirmPwd){
            errors.confirmPwd = "Confirm Password is required";
        }else if(confirmPwd !== pwd){
            errors.confirmPwd = "Confirm password must match password"
        }

        if(!age){
            errors.age = "Age is required";
        }else if(isNaN(age)||age<18){
            errors.age = "Age must be a number and at least 18"
        }

        if(!gender){
            errors.gender = "Gender is required";
        }

        return errors;
        // console.log(errors);
    }

    const handleSubmit =(e) =>{
        e.preventDefault();

        const validationErrors = validateForm();

        if(Object.keys(validationErrors).length){
            setErrors(validationErrors);
        }else{
            console.log('Form Submitted');
        }
    }

  return (
    <div className='container'>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
            {errors.name}
        </div>
        <div>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            {errors.email}
        </div>
        <div>
            <label>Password:</label>
            <input type='password' value={pwd} onChange={(e)=>setPwd(e.target.value)} />
            {errors.pwd}
        </div>
        <div>
            <label>Confirm Password:</label>
            <input type='password' value={confirmPwd} onChange={(e)=>setConfirmPwd(e.target.value)} />
            {errors.confirmPwd}
        </div>
        <div>
            <label>Age:</label>
            <input type='number' value={age} onChange={(e)=>setAge(e.target.value)} />
            {errors.age}
        </div>
        <div>
            <label>Gender:</label>
            <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            {errors.gender}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormVal
