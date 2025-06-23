import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './ManageAddress.css';

interface AddressFormData {
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  district: string;
  city: string;
  streetAddress: string;
  pinCode: string;
  phone: string;
}

const addressSchema = yup.object().shape({
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
  country: yup.string().required('Country is required'),
  state: yup.string().required('State is required'),
  district: yup.string().required('District is required'),
  city: yup.string().required('City is required'),
  streetAddress: yup
    .string()
    .required('Street address is required')
    .min(5, 'Must be at least 5 characters'),
  pinCode: yup
    .string()
    .required('Zip code is required')
    .matches(/^\d{5,6}(?:[-\s]\d{4})?$/, 'Invalid zip code'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
});

const ManageAddress: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<AddressFormData>({
    resolver: yupResolver(addressSchema),
  });

  const onSubmit = (data: AddressFormData) => {
    console.log('Address submitted:', data);
    reset();
  };

  // Restrict phone input to numbers only and max 10 digits
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setValue('phone', value);
    }
  };

  // Restrict zip code input
  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9-]/g, '');
    setValue('pinCode', value);
  };

  return (
    <div className="container-fluid" id="ManageAddress">
      <div className="container ManageAddress-container">
        <form className="manage-address-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="form-title">Add New Address</h2>

          <div className="AddressForm-row">
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

          <div className="AddressForm-row">
            <div className="form-group full-width">
              <label htmlFor="country">Country *</label>
              <input
                id="country"
                type="text"
                placeholder="Country"
                className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                {...register('country')}
              />
              {errors.country && (
                <div className="error-message">{errors.country.message}</div>
              )}
            </div>
          </div>

          <div className="AddressForm-row">
            <div className="form-group full-width">
              <label htmlFor="state">State *</label>
              <input
                id="state"
                type="text"
                placeholder="State"
                className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                {...register('state')}
              />
              {errors.state && (
                <div className="error-message">{errors.state.message}</div>
              )}
            </div>
          </div>

          <div className="AddressForm-row">
            <div className="form-group full-width">
              <label htmlFor="district">District *</label>
              <input
                id="district"
                type="text"
                placeholder="District"
                className={`form-control ${errors.district ? 'is-invalid' : ''}`}
                {...register('district')}
              />
              {errors.district && (
                <div className="error-message">{errors.district.message}</div>
              )}
            </div>
          </div>

          <div className="AddressForm-row">
            <div className="form-group full-width">
              <label htmlFor="city">City *</label>
              <input
                id="city"
                type="text"
                placeholder="City"
                className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                {...register('city')}
              />
              {errors.city && (
                <div className="error-message">{errors.city.message}</div>
              )}
            </div>
          </div>

          <div className="AddressForm-row">
            <div className="form-group full-width">
              <label htmlFor="streetAddress">Street Address *</label>
              <input
                id="streetAddress"
                type="text"
                placeholder="Street Address"
                className={`form-control ${
                  errors.streetAddress ? 'is-invalid' : ''
                }`}
                {...register('streetAddress')}
              />
              {errors.streetAddress && (
                <div className="error-message">
                  {errors.streetAddress.message}
                </div>
              )}
            </div>
          </div>

          <div className="AddressForm-row">
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code *</label>
              <input
                id="zipCode"
                type="text"
                placeholder="Zip Code"
                maxLength={10}
                className={`form-control ${errors.pinCode ? 'is-invalid' : ''}`}
                {...register('pinCode')}
                onChange={handleZipCodeChange}
              />
              {errors.pinCode && (
                <div className="error-message">{errors.pinCode.message}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
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

          <button type="submit" className="AddressForm-btn">
            Add Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageAddress;