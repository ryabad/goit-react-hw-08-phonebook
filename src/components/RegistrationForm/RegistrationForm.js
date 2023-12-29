import { Box, Button, TextField } from '@mui/material';
import Notiflix from 'notiflix';
import { Link } from 'react-router-dom';

const RegistrationForm = ({ register }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const newUser = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    if (
      newUser.name === '' ||
      newUser.email === '' ||
      newUser.password === ''
    ) {
      Notiflix.Notify.warning('All fields need to be filled');
      return;
    }
    register(newUser);
    form.reset();
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        height: '90vh',

        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h2 style={{ textAlign: 'center' }}>Registration</h2>
      <TextField
        id="inputName"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
      />
      <TextField
        id="inputEmail"
        label="Email"
        variant="outlined"
        type="email"
        name="email"
      />
      <TextField
        id="inputPassword"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button type="submit" variant="contained">
          Register
        </Button>
        <Link to="/login">To Login</Link>
      </div>
    </Box>
  );
};

export default RegistrationForm;
