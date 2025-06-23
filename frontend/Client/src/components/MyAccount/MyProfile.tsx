import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdEdit } from "react-icons/md";
import './MyProfile.css';

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
}

const profileSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'Must be at least 2 characters')
    .max(50, 'Must be at most 50 characters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Must be at least 2 characters')
    .max(50, 'Must be at most 50 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
  gender: yup
    .string()
    .required('Gender is required')
    .oneOf(['male', 'female', 'other'], 'Please select a valid gender'),
});

const MyProfile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileSchema),
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log('Profile updated:', data);
    // Here you would typically send the data to your backend
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Restrict phone input to numbers only and max 10 digits
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setValue('phone', value);
    }
  };

  return (
    <div className="container-fluid" id="MyProfile">
      <div className="container MyProfile-container">
        <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="form-title">My Profile</h2>

          {/* Profile Image Row */}
          <div className="profile-form-row image-row">
            <div className="profile-image-container">
              <div className="profile-image-wrapper">
                <img 
                  src={profileImage || "https://via.placeholder.com/150"} 
                  alt="Profile" 
                  className="profile-image"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="image-upload-input"
                  id="profileImageUpload"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                />
                <button 
                  type="button" 
                  className="edit-image-btn"
                  onClick={triggerFileInput}
                >
                  <MdEdit size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* First Name & Last Name Row */}
          <div className="profile-form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                {...register('firstName')}
              />
              {errors.firstName && (
                <div className="error-message">{errors.firstName.message}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                {...register('lastName')}
              />
              {errors.lastName && (
                <div className="error-message">{errors.lastName.message}</div>
              )}
            </div>
          </div>

          {/* Email Row */}
          <div className="profile-form-row">
            <div className="form-group full-width">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                {...register('email')}
                disabled // Typically email shouldn't be changed
              />
              {errors.email && (
                <div className="error-message">{errors.email.message}</div>
              )}
            </div>
          </div>

          {/* Phone Row */}
          <div className="profile-form-row">
            <div className="form-group full-width">
              <label htmlFor="phone">Phone Number *</label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                maxLength={10}
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                {...register('phone')}
                onChange={handlePhoneChange}
              />
              {errors.phone && (
                <div className="error-message">{errors.phone.message}</div>
              )}
            </div>
          </div>

          {/* Gender Row */}
          <div className="profile-form-row">
            <div className="form-group full-width">
              <label htmlFor="gender">Gender *</label>
              <select
                id="gender"
                className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                {...register('gender')}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <div className="error-message">{errors.gender.message}</div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="profile-form-row">
            <button type="submit" className="update-btn">
              Update Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;