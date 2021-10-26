import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as contactsOperations from '../../redux/Contact/contacts-operations';
import { visibleContactsSelector } from '../../redux/Contact/contacts-selectors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getIsLoggedIn } from '../../redux/Auth/Auth-selector';
// import { ButtonStyled } from './ContactList.styled';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
    <TableContainer component={Paper} sx={{ width: '50%' }}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataUsers.map(row => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.number}</TableCell>
              {/* <ButtonStyled onClick={() => dispatch(contactsOperations.deleteContacts(row.id))}>
                <DeleteForeverIcon sx={{ color: '#3498db' }}></DeleteForeverIcon>
              </ButtonStyled> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
