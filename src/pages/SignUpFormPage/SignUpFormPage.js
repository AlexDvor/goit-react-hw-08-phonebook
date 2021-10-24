import React from 'react';
import { Formik } from 'formik';
import { WrapperForm, StyledInput, ErrorMessage, TitleForm } from './SignUpFormPage.styled';
import * as yup from 'yup';

//
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

export default function SignUpFormPage() {
  const validationSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('This field is required'),
    password: yup.string().typeError('Should be a string').required('This field is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Password mismatch')
      .typeError('Should be a string')
      .required('This field is required'),
  });

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validatedOnBlur
        onSubmit={values => {
          console.log(values);
        }}
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
              autoComplete="off"
            >
              <StyledInput
                label="email"
                variant="outlined"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
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