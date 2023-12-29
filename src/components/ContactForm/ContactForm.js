import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/user/selectors';
import { addContactThunk } from 'store/user/userService';

import { nanoid } from 'nanoid';

import Notiflix from 'notiflix';

import { Box, Button, TextField } from '@mui/material';
import { checkName, checkPhone } from 'common/regExpCheck';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const addingContact = contact => {
    const isExist = contacts.some(el => el.name === contact.name);
    if (isExist) {
      Notiflix.Notify.failure(`${contact.name} is already in contacts`);
      return;
    }
    const newContact = {
      ...contact,
      id: nanoid(),
    };
    dispatch(addContactThunk(newContact));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const contact = {
      name: form.elements.name.value,
      number: form.elements.phone.value,
    };
    if (
      checkName(contact.name) === false ||
      checkPhone(contact.number) === false
    ) {
      Notiflix.Notify.warning('Input fields did not pass validation');
      return;
    }

    addingContact(contact);
    form.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
      }}
    >
      <TextField
        required
        sx={{
          backgroundColor: 'white',
          borderRadius: '10px',
        }}
        name="name"
        type="text"
        label="Input Name"
        id="inputName"
        variant="filled"
        inputProps={{
          maxLength: 20,
        }}
      />
      <TextField
        required
        sx={{
          backgroundColor: 'white',
          borderRadius: '10px',
        }}
        name="phone"
        type="tel"
        id="inputPhone"
        label="Input Phone"
        variant="filled"
        inputProps={{
          maxLength: 15,
        }}
      />

      <Button type="submit" variant="contained">
        Add contact
      </Button>
    </Box>
  );
};

export default ContactForm;
