import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./App.css"

function Useform() {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const onSubmit = (data) => {
    console.log(data);
    setSuccessMessage('Registration Successful');
  }
  return (
        <>
   <form id='form' onSubmit={handleSubmit(onSubmit)}>
   {successMessage && <p>{successMessage}</p>}
   <div id='form-div'>
       <div>
           <label>First Name:</label>
           <br />
           <input {...register('firstName', { required: 'First Name is required' })} />
           {errors.firstName && <p>{errors.firstName.message}</p>}
       </div>

       <div>
         <label>Last Name:</label>
         <br />
         <input {...register('lastName', { required: 'Last Name is required' })} />
         {errors.lastName && <p>{errors.lastName.message}</p>}
       </div>
        <div>
          <label>Email:</label>
          <br />
          <input {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' } })} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
  
        <div>
          <label>Password:</label>
          <br />
          <input type="password" {...register('password', { required: 'Password is required', minLength: { value: 5, message: 'Password must be more than 4 characters' }, maxLength: { value: 20, message: 'Password cannot be more than 20 characters' } })} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Submit</button>
        </div>
      </form>
      </>
)
  }
export default Useform