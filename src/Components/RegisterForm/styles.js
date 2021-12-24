import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    textField: {
      marginBottom: '10px',
      width: '-webkit-fill-available',
    },

    registrationButton: {
      width: '100%',
      height: '60px',
    },

    heading: {
      color: '#1976d2',
      textAlign: 'center',
      marginBottom: '10px',
    },

    modalBody: {
      display: 'flex',
      flexDirection: 'column',
      width: 400,
      background: 'white',
      border: '2px solid #000',
      boxShadow: 24,
      borderRadius: '10px',
      padding: '30px 50px 50px 50px',
    },

    modalContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }),
);

export default useStyles;
