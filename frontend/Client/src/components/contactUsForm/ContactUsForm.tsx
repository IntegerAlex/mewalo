import React from 'react';
import './ContactUsForm.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface ContactFormData {
  fullName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const contactSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Full name is required')
    .min(2, 'Must be at least 2 characters')
    .max(10, 'Must be at most 10 characters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Must be at least 2 characters')
    .max(10, 'Must be at most 10 characters'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
  subject: yup
    .string()
    .required('Subject is required')
    .max(20, 'Subject must be at most 20 characters'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

const ContactUsForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    reset();
  };

  // Restrict phone input to numbers only and max 10 digits
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setValue('phone', value);
    }
  };

  return (
    <div className="container-fluid" id='ContactUsForm'>
      <div className="container ContactUsForm-container">
        <form className="contactus-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="ContactForm-row">
            <div className='form-group'>
              <label htmlFor="fullName">Full Name *</label>
              <input
                id="fullName"
                type="text"
                maxLength={10}
                placeholder='Full Name'
                className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                {...register('fullName')}
              />
              {errors.fullName && <div className="error-message">{errors.fullName.message}</div>}
            </div>

            <div className='form-group'>
              <label htmlFor="lastName">Last Name *</label>
              <input
                id="lastName"
                type="text"
                maxLength={10}
                placeholder='Last Name'
                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
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
                type="email"
                placeholder='Email'
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                {...register('email')}
              />
              {errors.email && <div className="error-message">{errors.email.message}</div>}
            </div>

            <div className='form-group'>
              <label htmlFor="phone">Phone *</label>
              <input
                id="phone"
                type="tel"
                placeholder='Enter Phone Number'
                maxLength={10}
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                {...register('phone')}
                onChange={handlePhoneChange}
              />
              {errors.phone && <div className="error-message">{errors.phone.message}</div>}
            </div>
          </div>

          <div className="ContactForm-row">
            <div className='form-group full-width'>
              <label htmlFor="subject">Subject *</label>
              <input
                id="subject"
                type="text"
                maxLength={20}
                placeholder='Subject'
                className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
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
                rows={5}
                placeholder='Send a Message'
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
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
