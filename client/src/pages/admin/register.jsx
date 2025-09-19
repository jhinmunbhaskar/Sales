import React, { useState } from 'react';
import API from '../../api/apiUrl';           // API paths
import axiosInstance from '../../api/axiosInstance'; // axios instance

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post(API.REGISTER, form);

      if (res.status === 201) {
        setMessage('✅ User registered successfully!');
      } else {
        setMessage(res.data.message || '❌ Registration failed');
      }
    } catch (error) {
      console.error(error);
      setMessage('❌ Error: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
}

export default Register;
