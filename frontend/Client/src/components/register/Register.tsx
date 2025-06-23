import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

// Define form data interface
interface RegisterFormData {
  firstName: string;
  lastName: string;
  userEmail: string;
  userMobile: string;
}

// Validation schema
const registerSchema = yup.object().shape({
  firstName: yup.string()
    .required('First name is required')
    .min(2, 'Must be at least 2 characters')
    .max(10, 'Must be at most 10 characters'),
  lastName: yup.string()
    .required('Last name is required')
    .min(2, 'Must be at least 2 characters')
    .max(10, 'Must be at most 10 characters'),
  userEmail: yup.string()
    .email('Invalid email')
    .required('Email is required'),
  userMobile: yup.string()
    .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits')
    .required('Mobile is required'),

});

const Register: React.FC = () => {
  const apiPath = `${import.meta.env.VITE_API_URL}/product/auth/register`;
  console.log(apiPath);

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema)
  });

  // Restrict mobile number input
  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = e.target.value.replace(/\D/g, '');
    if (onlyNums.length <= 10) {
      setValue('userMobile', onlyNums);
    }
  };

  const onSubmit =async (data: RegisterFormData) => {
    //  setIsSubmitting(true);
    // setSubmitError('');

    // try{
    //   const response = await fetch(apiPath,{
    //     method:'POST',
    //     headers:{
    //       'Content-type':'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })

    //   const responseData = await response.json();

    //   if(!response.ok){
    //     throw new Error(responseData.message || 'Registration Failed')
    //   }
    //   console.log('Registration successful:', responseData);
    //   // Redirect to login or dashboard after successful registration
    //   navigate('/login');
    // }
    // catch(error)
    // {
    //   console.error('Registration error:', error);
    //   setSubmitError(error instanceof Error ? error.message : 'Registration failed');
    // }
    // finally{
    //   setIsSubmitting(false);
    // }
    console.log(data);


    // Registration logic here
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="register-title">Create Account</h1>

        {/* {submitError && <p className="error-text">{submitError}</p>} */}

        <div className="form-row">
          <div className="form-group" style={{ flex: 1, marginRight: '15px' }}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              maxLength={10}
              placeholder="Enter your first name"
              {...register('firstName')}
            />
            {errors.firstName && <p className="error-text">{errors.firstName.message}</p>}
          </div>

          <div className="form-group" style={{ flex: 1 }}>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              maxLength={10}
              placeholder="Enter your last name"
              {...register('lastName')}
            />
            {errors.lastName && <p className="error-text">{errors.lastName.message}</p>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="userEmail">Email</label>
          <input
            id="userEmail"
            type="email"
            placeholder="Enter your email"
            {...register('userEmail')}
          />
          {errors.userEmail && <p className="error-text">{errors.userEmail.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="userMobile">Mobile Number</label>
          <input
            id="userMobile"
            type="text"
            maxLength={10}
            placeholder="Enter your mobile number"
            {...register('userMobile')}
            onChange={handleMobileChange}
          />
          {errors.userMobile && <p className="error-text">{errors.userMobile.message}</p>}
        </div>

        <button type="submit" className="submit-button">Sign Up</button>

        <p className="login-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
