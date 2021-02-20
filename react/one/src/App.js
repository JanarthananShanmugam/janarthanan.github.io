import React, {Component} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const formik = useFormik({
    initialValues : {
      name: '',
      email: '',
      pwd :'',
      conpwd : ''
    },
    validationSchema: yup.object({
      name : yup.string()
      .strict()
      .trim()
      .required('Name is required')
      .min(4,'minimum 4 characters only')
      .max(15,'maximum 15 characters only'),
      
      email: yup.string()
      .email()
      .required('Email is required'),
     
      pwd: yup.string()
      .required('Password is requierd')
      .min(8,'minimum 8 characters'),
     
      conpwd: yup.string()
      .required('Confirm Password is requierd')
      .oneOf([yup.ref('pwd'),null],'Password and Confirm Password must be same')

    }),
    onSubmit : (userInputData) =>{
      console.log(userInputData);
    }
  })
  
  return (
    
    <div className = "container mt-9">
     
      <div className = "jumbotron">
        <h1>Sign Up</h1>
      <form autoComplete ="off" onSubmit ={formik.handleSubmit}>
        <div className = "form-group">
          <label>Name:</label>
          <input type='text'
          className = "form-control" 
          autoComplete ="off"
          name='name'
          onChange ={formik.handleChange} 
          value = {formik.values.name}/>
          {formik.errors.name ? <div className = "text-danger">{formik.errors.name}</div>: null}
        </div>

        <div className = "form-group">
          <label>Email:</label>
          <input type='email' 
          className = "form-control" 
          autoComplete ="off"
          name='email'
          onChange ={formik.handleChange} 
          value = {formik.values.email}/>
          {formik.errors.email ? <div className = "text-danger">{formik.errors.email}</div>: null}
        </div>

        <div className = "form-group">
          <label>Password:</label>
          <input type='password'
          name='pwd' 
          autoComplete ="off"
          className = "form-control"
          onChange ={formik.handleChange} 
          value = {formik.values.pwd}/>
          {formik.errors.pwd ? <div className = "text-danger">{formik.errors.pwd}</div>: null}
        </div>

        <div className = "form-group">
          <label>Confirm Password:</label>
          <input type='password'
          name='conpwd' 
          autoComplete ="off"
          className = "form-control"
          onChange ={formik.handleChange} 
          value = {formik.values.conpwd}/>
          {formik.errors.conpwd ? <div className = "text-danger">{formik.errors.conpwd}</div>: null}
        </div>

        <button className="btn btn-primary" type='submit'>Submit</button>
        <button  className="btn btn-primary" type='reset' onClick={formik.handleReset}>Clear</button>
        
      </form>
      </div>
    </div>
  );
}

export default App;
