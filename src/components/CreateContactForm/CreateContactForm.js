import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { WrapperForm, StyledInput, ErrorMessage, TitleForm } from './CreateContactForm.styled';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import * as operations from '../../redux/Contact/contacts-operations';
import * as selector from '../../redux/Contact/contacts-selectors';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';

export default function CreateContactForm({ setShowModal }) {
  const state = useSelector(selector.getContactsSelector);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
      .typeError('Please enter a valid name')
      .required('This field is required'),
    number: yup.number().typeError('Should be a numbers').required('This field is required'),
  });

  const onSubmit = values => {
    checkUserName(state, values);
  };

  const checkUserName = (userData, newData) => {
    if (userData.some(item => item.name.toLowerCase() === newData.name.toLowerCase())) {
      return toast.info('This name is already in your list');
    }
    dispatch(operations.postContacts(newData));
    setShowModal(false);
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
            <TitleForm>New Contact</TitleForm>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '250px' },
              }}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <StyledInput
                label="Name"
                variant="outlined"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name && <ErrorMessage>{`*${errors.name}`}</ErrorMessage>}

              <StyledInput
                label="Number"
                variant="outlined"
                type="tel"
                name="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
              />
              {touched.number && errors.number && (
                <ErrorMessage>{`*${errors.number}`}</ErrorMessage>
              )}

              <Button variant="contained" disabled={!isValid && !dirty} type="submit">
                Add Contact
              </Button>
            </Box>
          </WrapperForm>
        )}
      </Formik>
    </>
  );
}

CreateContactForm.propTypes = {
  handleChange: PropTypes.func,
  getData: PropTypes.func,
  handleSubmit: PropTypes.func,
  resetForm: PropTypes.func,
};
