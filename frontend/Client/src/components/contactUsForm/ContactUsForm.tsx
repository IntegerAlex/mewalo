import React from 'react';
import './ContactUsForm.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define interface for form data
interface ContactFormData {
  fullName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Yup validation schema with TypeScript types
const contactSchema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(10, 'Must be at least 10 digits'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
});

const ContactUsForm: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    reset();
  };

  return (
    <div className="container-fluid" id='ContactUsForm'>
      <div className="container ContactUsForm-container">
        {/* Left side - Form */}
        <form className="contactus-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="ContactForm-row">
            <div className='form-group'>
              <label htmlFor="fullName">Full Name *</label>
              <input 
                id="fullName"
                className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                type="text" 
                placeholder='Full Name'
                {...register('fullName')}
              />
              {errors.fullName && <div className="error-message">{errors.fullName.message}</div>}
            </div>
            
            <div className='form-group'>
              <label htmlFor="lastName">Last Name *</label>
              <input 
                id="lastName"
                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                type="text" 
                placeholder='Last Name'
                {...register('lastName')}
              />
              {errors.lastName && <div className="error-message">{errors.lastName.message}</div>}
            </div>
          </div>

          <div className="ContactForm-row">
            <div className='form-group'>
              <label htmlFor="email">Email *</label>
              <input 
                id="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                type="email" 
                placeholder='Email'
                {...register('email')}
              />
              {errors.email && <div className="error-message">{errors.email.message}</div>}
            </div>
            
            <div className='form-group'>
              <label htmlFor="phone">Phone *</label>
              <input 
                id="phone"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                type="tel" 
                placeholder='Enter Phone Number'
                {...register('phone')}
              />
              {errors.phone && <div className="error-message">{errors.phone.message}</div>}
            </div>
          </div>

          <div className="ContactForm-row">
            <div className='form-group full-width'>
              <label htmlFor="subject">Subject *</label>
              <input 
                id="subject"
                className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                type="text" 
                placeholder='Subject'
                {...register('subject')}
              />
              {errors.subject && <div className="error-message">{errors.subject.message}</div>}
            </div>
          </div>

          <div className="ContactForm-row">
            <div className='form-group full-width'>
              <label htmlFor="message">Your Message *</label>
              <textarea 
                id="message"
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                placeholder='Send a Message'
                rows={5}
                {...register('message')}
              />
              {errors.message && <div className="error-message">{errors.message.message}</div>}
            </div>
          </div>

          <button type="submit" className='ContactForm-btn'>Send a Message</button>
        </form>

        {/* Right side - Image */}
        <div className="contactusForm-Img"></div>
      </div>
    </div>
  );
};

export default ContactUsForm;