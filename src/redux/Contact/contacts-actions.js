import { createAction } from '@reduxjs/toolkit';

export const filterByName = createAction('filter/handleFilterByName');

export const getContactsRequest = createAction('contacts/getContactsRequest');
export const getContactsSuccess = createAction('contacts/getContactsSuccess');
export const getContactsError = createAction('contacts/getContactsError');

export const postContactsRequest = createAction('contacts/postContactsRequest');
export const postContactsSuccess = createAction('contacts/postContactsSuccess');
export const postContactsError = createAction('contacts/postContactsError');

export const deleteContactsRequest = createAction('contacts/deleteContactsRequest');
export const deleteContactsSuccess = createAction('contacts/deleteContactsSuccess');
export const deleteContactsError = createAction('contacts/deleteContactsError');

export const updatedListUsers = createAction('contacts/updatedListUsers');


// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159),
//   createData('Frozen yoghurt', 159),
//   createData('Frozen yoghurt', 159),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 250 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
