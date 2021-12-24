import React, {useState} from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import {Button} from '@mui/material';
import { gql, useMutation, useQuery } from '@apollo/client';

import useStyles from "./styles";

const VALIDATE_USER= gql`
  query validateUser($username: String!, $password: String!){
    validateUser(username: $username, password: $password ){
    id
    username
    }
  }
`;

const LoginForm = (props) => {
  const classes = useStyles();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {loading, error, data } = useQuery(VALIDATE_USER,{
      variables: {
        username: username,
        password: password,
      }
});
  if(error) {console.log('error', error.message)};

  const submitForm = () => {
    if(data) { props.onUser(data.validateUser) }
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
            Log In
          </Typography>
          <TextField className={classes.textField} label="User Name" required
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField className={classes.textField} type="password" label="Password" required
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
            Log In
          </Button>
        </form>
      </div>
    </Modal>
  )
}

export default LoginForm;
