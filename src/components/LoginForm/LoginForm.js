import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';

const LoginForm = ({ login }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    if (user.email === '' || user.password === '') {
      Notiflix.Notify.warning('All fields need to be filled');
      return;
    }
    login(user);
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
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <TextField
        type="email"
        name="email"
        id="inputEmail"
        label="Email address"
        variant="outlined"
      />
      <TextField
        type="password"
        name="password"
        id="inputPassword"
        label="Password"
        variant="outlined"
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button type="submit" variant="contained">
          Login
        </Button>
        <Link to="/registration">To Registration</Link>
      </div>
    </Box>
  );
};

export default LoginForm;
