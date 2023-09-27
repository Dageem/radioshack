import React, { useState } from 'react';
import { useRegisterMutation, useLoginMutation } from '../../reducers/auth';

const LoginRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const [register] = useRegisterMutation();
    const [login] = useLoginMutation();
  
    const handleRegister = async () => {
      try {
        await register({ email, password }).unwrap();
        setSuccessMessage('Registered successfully!');
      } catch (error) {
        console.error('Register failed:', error);
        setErrorMessage('Registration failed!');
      }
      setTimeout(() => {
        setEmail('');
        setPassword('');
        setSuccessMessage('');
        setErrorMessage('');
      }, 2000);
    };
  
    const handleLogin = async () => {
      try {
        await login({ email, password }).unwrap();
        setSuccessMessage('Logged in successfully!');
      } catch (error) {
        console.error('Login failed:', error);
        setErrorMessage('Login failed!'); 
      }

      setTimeout(() => {
        setEmail('');
        setPassword('');
        setSuccessMessage('');
        setErrorMessage('');
      }, 2000);
    };
  
    return (
      <div>
        <div className='inputContain'>
          <input
            className='input'
            type='email' // Type is email
            placeholder='Email' // Placeholder is Email
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='input'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='butt' onClick={handleRegister}>Register</button>
          <button className='butt' onClick={handleLogin}>Login</button>
        </div>
        <div>
          {successMessage && <div className="success-alert">{successMessage}</div>}
          {errorMessage && <div className="error-alert">{errorMessage}</div>}
        </div>
      </div>
    );
  };
  
  export default LoginRegister;

