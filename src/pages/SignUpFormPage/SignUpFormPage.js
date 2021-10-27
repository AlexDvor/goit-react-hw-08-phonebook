// import React from 'react';
import { WrapperForm, StyledInput, ErrorMessage, TitleForm } from './SignUpFormPage.styled';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
//
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import * as authOperations from '../../redux/Auth/Auth-operations';

export default function SignUpFormPage() {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .typeError('Should be a string')
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
      .required('This field is required'),
    email: yup.string().email('Please enter a valid email').required('This field is required'),
    password: yup
      .string()
      .typeError('Should be a string')
      .min(7, 'Password is too short - should be 7 chars minimum.')
      .required('This field is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .typeError('Should be a string')
      .required('This field is required'),
  });

  const onSubmit = values => {
    dispatch(authOperations.register(values));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validatedOnBlur
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <WrapperForm>
            <TitleForm>SignUp</TitleForm>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '250px' },
              }}
              onSubmit={handleSubmit}
              autoComplete="on"
            >
              <StyledInput
                label="name"
                variant="outlined"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                autoComplete="on"
              />
              {touched.name && errors.name && <ErrorMessage>{`*${errors.name}`}</ErrorMessage>}

              <StyledInput
                label="email"
                variant="outlined"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                autoComplete="on"
              />
              {touched.email && errors.email && <ErrorMessage>{`*${errors.email}`}</ErrorMessage>}

              <StyledInput
                label="password"
                variant="outlined"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                autoComplete="on"
              />
              {touched.password && errors.password && (
                <ErrorMessage>{`*${errors.password}`}</ErrorMessage>
              )}

              <StyledInput
                label="confirmPassword"
                variant="outlined"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                autoComplete="on"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <ErrorMessage>{`*${errors.confirmPassword}`}</ErrorMessage>
              )}

              <Button variant="contained" disabled={!isValid && !dirty} type="submit">
                Registration
              </Button>
            </Box>
          </WrapperForm>
        )}
      </Formik>
    </>
  );
}
