import React, { useState } from 'react'
import './LoginRegister.css'
import { Button, Image } from 'react-bootstrap'
import img from '../../assets/images/loginRegister.webp'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const registerSchema = yup.object().shape({
  username: yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
  userEmail: yup.string().email('Invalid email').required('Email is required'),
  address: yup.string().required('Address is required'),
  pincode: yup.string().matches(/^\d{6}$/, 'Pincode must be 6 digits').required('Pincode is required'),
  userMobile: yup.string().matches(/^\d{10}$/, 'Mobile must be 10 digits').required('Mobile is required'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  cpassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required')
})

const loginSchema = yup.object().shape({
  emailOrPhone: yup.string().required('Email or phone is required'),
  password: yup.string().required('Password is required')
})


const LoginRegister = () => {
  const navigate = useNavigate()
  const [activePanel, setActivePanel] = useState<'register' | 'login'>('register')
  //  const [registerResponse, setRegisterResponse] = useState(null)
  // const [loginResponse, setLoginResponse] = useState(null)
  // const [error, setError] = useState(null)

  const handleSignIn = () => {
    setActivePanel('login')
  }

  const handleSignUp = () => {
    setActivePanel('register')
  }

  const registerFormik = useFormik({
    initialValues: {
      username: '',
      userEmail: '',
      address: '',
      pincode: '',
      userMobile: '',
      password: '',
      cpassword: ''
    },
    validationSchema: registerSchema,
    onSubmit: values => {
      console.log('Register Form Data:', values)
    }
  })

   const loginFormik = useFormik({
    initialValues: {
      emailOrPhone: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      console.log('Login Form Data:', values);
      navigate('/otp')
    }
  })


  // / Register API call
  // const handleRegister = async (data) => {
  //   try {
  //     const response = await fetch('https://your-api-endpoint.com/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data)
  //     })

  //     if (!response.ok) {
  //       const errorData = await response.json()
  //       throw new Error(errorData.message || 'Registration failed')
  //     }

  //     const result = await response.json()
  //     setRegisterResponse(result)
  //     // Optionally navigate or show success message
  //     // navigate('/success-page')
  //   } catch (err) {
  //     setError(err.message)
  //     console.error('Registration error:', err)
  //   }
  // }

  // // Login API call
  // const handleLogin = async (data) => {
  //   try {
  //     const response = await fetch('https://your-api-endpoint.com/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data)
  //     })

  //     if (!response.ok) {
  //       const errorData = await response.json()
  //       throw new Error(errorData.message || 'Login failed')
  //     }

  //     const result = await response.json()
  //     setLoginResponse(result)
      
  //     // Store token if available
  //     if (result.token) {
  //       localStorage.setItem('authToken', result.token)
  //     }
      
  //     // Navigate to OTP page on successful login
  //     navigate('/otp')
  //   } catch (err) {
  //     setError(err.message)
  //     console.error('Login error:', err)
  //   }
  // }

  //  useEffect(() => {
  //   if (registerResponse) {
  //     // Handle successful registration
  //     console.log('Registration successful:', registerResponse)
  //   }
  // }, [registerResponse])

  // useEffect(() => {
  //   if (loginResponse) {
  //     // Handle successful login
  //     console.log('Login successful:', loginResponse)
  //   }
  // }, [loginResponse])

  return (
    <>
        <div className="container-fluid" id='LoginRegister'>
            <div className={`container LoginRegister ${activePanel}-active`}>
                {/* REGISTER  */}
                <div className="register-part">
                   <h2 className="register-title">Create Account</h2>
            <form onSubmit={registerFormik.handleSubmit}>
              <div className="register-row1">
                <div className={`form-group ${registerFormik.touched.username && registerFormik.errors.username ? 'error' : ''}`}>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                    value={registerFormik.values.username}
                    className='register-username'
                  />
                  {registerFormik.touched.username && registerFormik.errors.username && (
                    <div className="error-message">{registerFormik.errors.username}</div>
                  )}
                </div>
                <div className={`form-group ${registerFormik.touched.userEmail && registerFormik.errors.userEmail ? 'error' : ''}`}>
                  <input
                    type="text"
                    name="userEmail"
                    placeholder="Email"
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                    value={registerFormik.values.userEmail}
                    className='register-useremail'
                  />
                  {registerFormik.touched.userEmail && registerFormik.errors.userEmail && (
                    <div className="error-message">{registerFormik.errors.userEmail}</div>
                  )}
                </div>
              </div>
              
              <div className="register-row2">
                <div className={`form-group full-width ${registerFormik.touched.address && registerFormik.errors.address ? 'error' : ''}`}>
                  <textarea
                    name="address"
                    placeholder="Address"
                    rows={3}
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                    value={registerFormik.values.address}
                    className='register-address'
                  />
                  {registerFormik.touched.address && registerFormik.errors.address && (
                    <div className="error-message">{registerFormik.errors.address}</div>
                  )}
                </div>
              </div>
              
              <div className="register-row3">
                <div className={`form-group ${registerFormik.touched.pincode && registerFormik.errors.pincode ? 'error' : ''}`}>
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                    value={registerFormik.values.pincode}
                    className='register-pincode'
                  />
                  {registerFormik.touched.pincode && registerFormik.errors.pincode && (
                    <div className="error-message">{registerFormik.errors.pincode}</div>
                  )}
                </div>
                <div className={`form-group ${registerFormik.touched.userMobile && registerFormik.errors.userMobile ? 'error' : ''}`}>
                  <input
                    type="text"
                    name="userMobile"
                    placeholder="Mobile Number"
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                    value={registerFormik.values.userMobile}
                    className='register-phone'
                  />
                  {registerFormik.touched.userMobile && registerFormik.errors.userMobile && (
                    <div className="error-message">{registerFormik.errors.userMobile}</div>
                  )}
                </div>
              </div>
              
              <div className="register-row4">
                <div className={`form-group ${registerFormik.touched.password && registerFormik.errors.password ? 'error' : ''}`}>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                    value={registerFormik.values.password}
                    className='register-password'
                  />
                  {registerFormik.touched.password && registerFormik.errors.password && (
                    <div className="error-message">{registerFormik.errors.password}</div>
                  )}
                </div>
                <div className={`form-group ${registerFormik.touched.cpassword && registerFormik.errors.cpassword ? 'error' : ''}`}>
                  <input
                    type="password"
                    name="cpassword"
                    placeholder="Confirm Password"
                    onChange={registerFormik.handleChange}
                    onBlur={registerFormik.handleBlur}
                    value={registerFormik.values.cpassword}
                    className='register-cpassword'
                  />
                  {registerFormik.touched.cpassword && registerFormik.errors.cpassword && (
                    <div className="error-message">{registerFormik.errors.cpassword}</div>
                  )}
                </div>
              </div>
              
              <div className="form-footer">
                <button type="submit" className="submit-btn">Register</button>
                <div className="switch-form-text">
                  Already have an account? <span className="switch-link" onClick={handleSignUp}>Sign In</span>
                </div>
              </div>
            </form>
                    {/* <Button onClick={handleSignUp}>Sign In ?</Button> */}
                </div>


                {/* LOGIN  */}
                <div className="login-part">
                    {/* login form  */}
                     
            <form onSubmit={loginFormik.handleSubmit}>
              <div className="form-row">
              <h2 className="login-form-title">Login Form</h2>
              </div>
              <div className="form-row">
                <div className={`form-group full-width ${loginFormik.touched.emailOrPhone && loginFormik.errors.emailOrPhone ? 'error' : ''} `}>
                  <input
                    type="text"
                    name="emailOrPhone"
                    placeholder="Email or Phone Number"
                    onChange={loginFormik.handleChange}
                    onBlur={loginFormik.handleBlur}
                    value={loginFormik.values.emailOrPhone}
                    className='login-phone'
                  />
                  {loginFormik.touched.emailOrPhone && loginFormik.errors.emailOrPhone && (
                    <div className="error-message">{loginFormik.errors.emailOrPhone}</div>
                  )}
                </div>
              </div>
              
              <div className="form-row">
                <div className={`form-group full-width ${loginFormik.touched.password && loginFormik.errors.password ? 'error' : ''}`}>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={loginFormik.handleChange}
                    onBlur={loginFormik.handleBlur}
                    value={loginFormik.values.password}
                    className='login-password'
                  />
                  {loginFormik.touched.password && loginFormik.errors.password && (
                    <div className="error-message">{loginFormik.errors.password}</div>
                  )}
                </div>
              </div>
              
              <div className="form-footer">
                <button type="submit" className="submit-btn">Sign In</button>
                <div className="switch-form-text">
                  Don't have an account? <span  className="switch-link" onClick={handleSignIn}>Sign Up</span>
                </div>
              </div>
            </form>
                    {/* <Button onClick={handleSignIn}>Sign Up</Button> */}
                </div>
                
                <div className="boxCover-img">
                    <Image src={img} fluid/>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginRegister

