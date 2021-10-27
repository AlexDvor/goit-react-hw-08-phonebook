import PropTypes from 'prop-types';
import * as actions from '../../redux/Contact/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { Search, SearchIconWrapper, StyledInputBase } from './Filter.styled';
import SearchIcon from '@mui/icons-material/Search';

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(actions.filterByName(e.target.value))}
        />
      </Search>
    </>
  );
}

// export default function Filter() {
//   const filter = useSelector(state => state.contacts.filter);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <p>Find Contacts by name</p>
//       <input
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={e => dispatch(actions.filterByName(e.target.value))}
//         autoComplete="off"
//       ></input>
//     </>
//   );
// }

// Filter.propTypes = {
//   filter: PropTypes.string,
//   onChange: PropTypes.func,
// };
