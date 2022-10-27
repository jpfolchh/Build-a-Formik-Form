import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('form:', values);
      alert('Login Successful');
    },
    onChange: values => {
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      if(!values.email) errors.email = 'Field required';
      else if(values.email.search('@') == -1) errors.email = 'Username should be an email';
      if(!values.password) errors.password = 'Field required';
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>EMAIL</div>
        <input id='emailField' name='email' type='text' onChange={formik.handleChange} value={formik.values.email}/>
        <div id="emailError" style={{ color: "red" }}>{formik.errors.email}</div>
        <div>PASSWORD</div>
        <input id='pswField' name='password' type='text' onChange={formik.handleChange} value={formik.values.password}/>
        <div id="pswError" style={{ color: "red" }}>{formik.errors.password}</div>
        <button id='submitBtn' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
