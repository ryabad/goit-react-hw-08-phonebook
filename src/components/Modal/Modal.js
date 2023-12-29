import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeContactThunk } from 'store/user/userService';
import { checkName, checkPhone } from 'common/regExpCheck';
import Notiflix from 'notiflix';

import { Box, Button, TextField } from '@mui/material';
import css from './Modal.module.css';

const Modal = ({ close, contact }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const changedContact = {
      name: form.elements.name.value,
      number: form.elements.phone.value,
      id: contact.id,
    };
    if (
      checkName(changedContact.name) === false ||
      checkPhone(changedContact.number) === false
    ) {
      Notiflix.Notify.warning('Input fields did not pass validation');
      return;
    }
    changeContact(changedContact);
    close();
  };

  const changeContact = data => {
    dispatch(changeContactThunk(data));
  };

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  useEffect(() => {
    const handleESC = e => {
      if (e.code === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', handleESC);

    return () => {
      document.removeEventListener('keydown', handleESC);
    };
  }, [close]);

  return (
    <div className={css.overlay} onClick={handleClick}>
      <div className={css.modal}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '400px',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            height: '300px',

            '& > :not(style)': { m: 1, width: '25ch' },
          }}
        >
          <div>
            <p>Old name: {contact.name}</p>
            <TextField
              variant="outlined"
              name="name"
              type="text"
              label="Name"
              inputProps={{
                maxLength: 15,
              }}
              required
            />
          </div>
          <div>
            <p>old phone: {contact.number}</p>
            <TextField
              name="phone"
              type="tel"
              id="inputPhone"
              label="Phone"
              required
            />
          </div>
          <Button type="submit" variant="contained">
            Change
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Modal;
