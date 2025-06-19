import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

// Define form data interface
interface LoginFormData {
  userMobile: string;
}

// Validation schema
const loginSchema = yup.object().shape({
  userMobile: yup
    .string()
    .required('Mobile number is required')
    .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits'),
});

const Login: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const onlyNums = value.replace(/\D/g, ''); // Remove non-numeric
    if (onlyNums.length <= 10) {
      setValue('userMobile', onlyNums); // set filtered value
    }
  };

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate('/otp');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="login-title">Sign In</h1>

        <div className="form-group">
          <label htmlFor="userMobile">Mobile Number</label>
          <input
            id="userMobile"
            type="text"
            maxLength={10}
            placeholder="Enter your mobile number"
            {...register('userMobile')}
            onChange={handleInputChange}
          />
          {errors.userMobile && (
            <p className="error-text">{errors.userMobile.message}</p>
          )}
        </div>

        <button type="submit" className="submit-button">
          Sign In
        </button>

        <p className="signup-link">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
