import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import RegisterForm from '../Auth/RegisterForm';
import LoginForm from '../LoginForm';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Header = () => {
  const [show_register_form, setShowRegisterForm] = useState(false);
  const [show_login_form, setShowLoginForm] = useState(false);
  const [logged_in, setLoggedIn] = useState(false);
  const [user_name, setUserName] = useState("");

  const openRegisterForm = () => {
    setShowRegisterForm(true);
  }

  const onRegisterFormClose = () => {
    setShowRegisterForm(false);
  }

  const openLoginForm = () => {
    setShowLoginForm(true);
  }

  const onLoginFormClose = () => {
    setShowLoginForm(false);
  }

  const afterLogin = () => {
    setLoggedIn(true);
  }

  const userLogin = (user) => {
    if(user){
      setLoggedIn(true);
      setUserName(user.username);
      setShowLoginForm(false);
    }
  }

  const userLogout = () => {
    setLoggedIn(false);
  }

  return(
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ width: 1 }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 8">
              <Item>
                <Typography variant="h6" color="inherit" component="div">TAKHTI</Typography>
              </Item>
            </Box>
            <Box gridColumn="span 4">
              <Item>
                {
                  (logged_in == false) ?
                  <div>
                    <Button
                      color="secondary"
                      variant="contained"
                      endIcon={ <LoginIcon/>}
                      onClick={openLoginForm}
                    >
                      Login
                    </Button>
                    <Button
                      color="secondary"
                      variant="contained"
                      endIcon={ <AddIcon/> }
                      onClick={openRegisterForm}
                    >
                      Register
                    </Button>
                  </div> :
                  <div>
                    <span>
                      {user_name}
                    </span>
                    <Button
                      color="secondary"
                      variant="contained"
                      endIcon={ <AddIcon/> }
                      onClick={userLogout}
                    >
                      Logout
                    </Button>
                  </div>
                }
              </Item>
            </Box>
          </Box>
        </Toolbar>
        <RegisterForm showForm={show_register_form} closeForm={onRegisterFormClose}/>
        <LoginForm showForm={show_login_form} closeForm={onLoginFormClose} onUser={userLogin}/>
      </Container>
    </AppBar>
  )
}

export default Header;
