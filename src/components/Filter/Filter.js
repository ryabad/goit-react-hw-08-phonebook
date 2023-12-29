import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from 'store/filter/filterSlice';
import { selectFilter } from 'store/filter/selectors';

import { TextField } from '@mui/material';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filterAction(e.target.value));
  };
  return (
    <div className={css.filter}>
      <TextField
        sx={{
          backgroundColor: 'white',
          borderRadius: '10px',
        }}
        name="filter"
        type="text"
        id="filterContact"
        value={filter}
        onChange={handleFilter}
        label="Contacts filter"
        variant="filled"
      />
    </div>
  );
};

export default Filter;
