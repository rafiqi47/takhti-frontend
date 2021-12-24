import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import {Button} from '@mui/material';
import { gql, useMutation } from '@apollo/client';

import useStyles from "./styles";

const CREATE_USER = gql`
  mutation CreateUser($username: String!,  $password: String!){
    createUser(input: {username: $username, password: $password}){
      user{
        id,
        username
      }
    }
  }
`;

const RegisterForm = (props) => {

  const classes = useStyles();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  if(error) {console.log('error', error)}

  const submitForm = () => {
    console.log(username, password)
    createUser({
      variables: {
        username: username,
        password: password,
      },
      onCompleted: (data) => {
        console.log('data', data)
      }
    })
  }

  return(
      <Modal
        open={props.showForm}
        onClose={props.closeForm}
        classes={{ root: classes.modalContainer }}
      >
        <div className={classes.modalBody}>
          <form>
            <Typography className={classes.heading} variant="h6" component="h2">
              Register
            </Typography>
            <TextField className={classes.textField} label="User Name" required
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField className={classes.textField} label="Password" type="password" required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              color="secondary"
              variant="contained"
              endIcon={ <AddIcon/> }
              className={classes.registrationButton}
              type="submit"
              onClick={submitForm}
            >
              Register
            </Button>
          </form>
        </div>
      </Modal>
  )
}

export default RegisterForm;
