// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import FormInput from './component/FormInput';
import Signature from './component/Signature';

const App = () => {
  /*Setting The Initial Input */
  const [dataFormDefault, setDataForm] = useState({
    name: '',
    email: '',
    position: '',
    phone: ''
  })

  /*Updating The Signature When Input */
  const handleChange = (e) => {
      setDataForm({ ...dataFormDefault, [e.target.name]: e.target.value})
  }

  /*Reseting The Signature Back To Initial Stage */
  const handleReset = () => {
      setDataForm({ ...dataFormDefault, name: '', email: '', position: '', phone: ''})
  }

  
  return (
    <>
      <div className='container'>
        <div className='content'>
          <FormInput
            {...dataFormDefault}
            handleChange = {handleChange}
            handleReset = {handleReset}
          />

          <Signature
            {...dataFormDefault}
          />

        </div>
      </div>
    </>

  )
}

export default App;
