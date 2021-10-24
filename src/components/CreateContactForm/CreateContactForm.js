// import PropTypes from 'prop-types';
import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { WrapperForm, StyledInput, ErrorMessage, TitleForm } from './CreateContactForm.styled';
import PropTypes from 'prop-types';
import { FormItem, Input, FormBox } from './CreateContactForm.styled';
import * as operations from '../../redux/Contact/contacts-operations';
import * as selector from '../../redux/Contact/contacts-selectors';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';

export default function Form() {
  const state = useSelector(selector.getContactsSelector);
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    name: yup.string().typeError('Please enter a valid name').required('This field is required'),
    number: yup.number().typeError('Should be a numbers').required('This field is required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const onSubmit = values => {
    checkUserName(state, values);
  };

  const checkUserName = (userData, newData) => {
    if (userData.some(item => item.name.toLowerCase() === newData.name.toLowerCase())) {
      return toast.info('This name is already in your list');
    }
    dispatch(operations.postContacts(newData));
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

Form.propTypes = {
  handleChange: PropTypes.func,
  getData: PropTypes.func,
  handleSubmit: PropTypes.func,
  resetForm: PropTypes.func,
};

// const [name, setName] = useState('');
// const [number, setNumber] = useState('');
// const state = useSelector(selector.getContactsSelector);
// const dispatch = useDispatch();
// const handleChange = ({ target }) => {
//   const { name, value } = target;
//   switch (name) {
//     case 'name':
//       setName(value);
//       break;
//     case 'number':
//       setNumber(value);
//       break;
//     default:
//       return;
//   }
// };
// const handleSubmit = e => {
//   e.preventDefault();
//   const contactData = {
//     name,
//     number,
//   };
//   checkUserName(state, contactData);
//   setName('');
//   setNumber('');
// };
// const checkUserName = (userData, newData) => {
//   if (userData.some(item => item.name === newData.name)) {
//     return toast.info('This name is already in your list');
//   }
//   dispatch(operations.postContacts(newData));
// };

/* <FormBox>
  //       <FormItem onSubmit={handleSubmit}>
  //         <Input */
//           type="text"
//           value={name}
//           name="name"
//           onChange={handleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//           placeholder="Name"
//         />
//         <Input
//           type="tel"
//           name="number"
//           value={number}
//           onChange={handleChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           required
//           placeholder="Phone number"
//         />

//         <button type="submit">Add Contact</button>
//       </FormItem>
//     </FormBox>
