import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from './ContactList.styled';
import * as contactsOperations from '../../redux/Contact/contacts-operations';
import { visibleContactsSelector } from '../../redux/Contact/contacts-selectors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ContactList() {
  const dataUsers = useSelector(visibleContactsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: '50%',
      }}
    >
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataUsers.map(row => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// export default function ContactList() {
//   const dataUsers = useSelector(visibleContactsSelector);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(contactsOperations.getContacts());
//   }, [dispatch]);

//   return (
//     <>
//       {dataUsers.length > 0 &&
//         dataUsers.map(({ name, id, number }) => (
//           <li key={id}>
//             {name} : {number}
//             <Button onClick={() => dispatch(contactsOperations.deleteContacts(id))}>Delete</Button>
//           </li>
//         ))}
//     </>
//   );
// }

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
