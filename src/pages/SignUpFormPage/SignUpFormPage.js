import React from 'react';
import { Formik } from 'formik';
import { StyledForm, WrapperForm, StyledInput, StyledButton } from './SignUpFormPage.styled';
import * as yup from 'yup';

export default function SignUpFormPage() {
  const validationSchema = yup.object().shape({
    email: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    confirmPassword: yup.string().typeError('Должно быть строкой').required('Обязательно'),
  });

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
            <StyledForm onSubmit={handleSubmit}>
              <StyledInput
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email && <p>{errors.email}</p>}

              <StyledInput
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password && <p>{errors.password}</p>}

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
            </StyledForm>
          </WrapperForm>
        )}
      </Formik>
    </>
  );
}
