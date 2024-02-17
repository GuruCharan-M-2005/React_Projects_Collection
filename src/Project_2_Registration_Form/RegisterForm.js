import React, { useState } from 'react'
import './RegisterForm.css'
export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    conpass:''
  })
  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
    conpass:''
  });
   const handleChange=(e)=>{
    const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
   }
   const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', username: '', password: '' ,conpass:''};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z_]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }
    if (!formData.name || !usernameRegex.test(formData.name)) {
      newErrors.username = 'Username is invalid';
      isValid = false;
    }
    if (!formData.password || formData.password.length < 6 || !passwordRegex.test(formData.password)) {
      newErrors.password = 'Password is invalid';
      isValid = false;
    }
    if (!formData.conpass || formData.conpass!==formData.password) {
      newErrors.conpass = 'Password is unmatched';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form Submitted...!!!")
      console.log('Form submitted:', formData);
    } 
    else {
      if(errors.username!==''){
        alert(errors.username);
      }
      else if(errors.email!==''){
        alert(errors.email);
      }
      else if(errors.password!==''){
        alert(errors.password);
      }
      else if(errors.conpass!==''){
        alert(errors.conpass);
      }
      console.log('Form validation failed');
    }
  };
  return (
    <div className='divsty'>
        <form className='formsty'>
            <input type="text" value={formData.name} name="name" onChange={handleChange} placeholder='Username' required className='boxsty'/>
            <input type="email" value={formData.email} name="email" onChange={handleChange} placeholder='Email' required className='boxsty'/>
            <input type="password" value={formData.password} name="password" onChange={handleChange} placeholder='Password' required className='boxsty'/>
            <input type="password" placeholder='Confirm Password' value={formData.conpass} onChange={handleChange} name="conpass" required className='boxsty'/><br></br>
            <button onClick={handleSubmit} className='butsty'>Register</button>
        </form>
    </div>
  )
}