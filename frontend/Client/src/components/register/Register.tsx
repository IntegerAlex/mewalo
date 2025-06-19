import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
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

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
    // Registration logic here
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="register-title">Create Account</h1>

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
