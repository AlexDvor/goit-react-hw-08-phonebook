import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as contactsOperations from '../../redux/Contact/contacts-operations';
import { visibleContactsSelector } from '../../redux/Contact/contacts-selectors';
import { getIsLoggedIn } from '../../redux/Auth/Auth-selector';
import {
  ButtonStyled,
  ContentWrapper,
  HeadingTitleBox,
  ListItems,
  UserIconBox,
  Item,
  Name,
  Phone,
} from './ContactList.styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ContactList() {
  const dataUsers = useSelector(visibleContactsSelector);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(contactsOperations.getContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <ContentWrapper>
      <HeadingTitleBox>
        <div>User</div>
        <div>Name</div>
        <div>Phone</div>
        <div>Delete</div>
      </HeadingTitleBox>
      <ListItems>
        {dataUsers.length > 0 &&
          dataUsers.map(item => (
            <Item key={item.id}>
              <UserIconBox>
                <AccountCircleIcon sx={{ color: '#3498db' }} />
              </UserIconBox>
              <Name>{item.name}</Name>
              <Phone>{item.number}</Phone>
              <div>
                <ButtonStyled onClick={() => dispatch(contactsOperations.deleteContacts(item.id))}>
                  <DeleteForeverIcon sx={{ color: '#dd3928' }}></DeleteForeverIcon>
                </ButtonStyled>
              </div>
            </Item>
          ))}
      </ListItems>
    </ContentWrapper>
  );
}

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
