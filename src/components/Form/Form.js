// import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FormItem, Input, FormBox } from './Form.styled.jsx';
import * as operations from '../../redux/Contact/contacts-operations';
import * as selector from '../../redux/Contact/contacts-selectors';
import { toast } from 'react-toastify';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const state = useSelector(selector.getContactsSelector);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactData = {
      name,
      number,
    };
    checkUserName(state, contactData);
    setName('');
    setNumber('');
  };

  const checkUserName = (userData, newData) => {
    if (userData.some(item => item.name === newData.name)) {
      return toast.info('This name is already in your list');
    }

    dispatch(operations.postContacts(newData));
  };

  return (
    <>
      <FormBox>
        <FormItem onSubmit={handleSubmit}>
          <Input
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Name"
          />
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="Phone number"
          />

          <button type="submit">Add Contact</button>
        </FormItem>
      </FormBox>
    </>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func,
  getData: PropTypes.func,
  handleSubmit: PropTypes.func,
  resetForm: PropTypes.func,
};
