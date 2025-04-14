import React, { useState } from 'react'

const Form = () => {

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleInput = (e) =>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type='text' name='name' value={formData.name} onChange={handleInput} />
            </label>
            <label>
                Email:
                <input type='email' name='email' value={formData.email} onChange={handleInput} />
            </label>
            <label>
                Password:
                <input type='password' name='password' value={formData.password} onChange={handleInput} />
            </label>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form;