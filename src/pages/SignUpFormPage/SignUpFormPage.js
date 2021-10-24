import React from 'react';
import { Formik } from 'formik';
import { StyledForm, WrapperForm, StyledInput, StyledButton } from './SignUpFormPage.styled';
import * as yup from 'yup';
//
import { TextField } from '@mui/material';
// import Box from '@mui/material/Box';

export default function SignUpFormPage() {
  const validationSchema = yup.object().shape({
    email: yup.string().email('Введите верный email').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .typeError('Должно быть строкой')
      .required('Обязательно'),
  });

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validatedOnBlur
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <WrapperForm>
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              autoComplete="true"
            />
            {touched.email && errors.email && <p>{errors.email}</p>}

            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password && errors.password && <p>{errors.password}</p>}

            <TextField
              id="outlined-basic"
              label="confirmPassword"
              variant="outlined"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}

            {/* <StyledForm onSubmit={handleSubmit}>
              <label htmlFor={'email'}>Email</label>
              <StyledInput
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email && <p>{errors.email}</p>}

              <label htmlFor={'Password'}>Password</label>
              <StyledInput
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password && <p>{errors.password}</p>}

              <label htmlFor={'confirmPassword'}>ConfirmPassword</label>
              <StyledInput
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword && (
                <p>{errors.confirmPassword}</p>
              )}

              <StyledButton disabled={!isValid && !dirty} type="submit">
                Registration
              </StyledButton>
            </StyledForm> */}
          </WrapperForm>
        )}
      </Formik>
    </>
  );
}
