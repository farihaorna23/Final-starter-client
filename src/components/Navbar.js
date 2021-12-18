import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif',
    fontSize: '35px',
    color: '#FBE2E5'
  },
  appBar: {
    backgroundColor: '#716F81',
    shadows: ['none'],
  },
  greeting: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  links: {
    textDecoration: 'none',
  }

}));



const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="inherit" >
          Campus Connect
          </Typography>

        <Link className={classes.links} to={'/campuses'} >
          <Button variant="contained" style={{ marginRight: '10px', backgroundColor: "#B97A95", color: "white" }}>
            All Campuses
            </Button>
        </Link>

        <Link className={classes.links} to={'/students'} >
          <Button variant="contained" style={{ backgroundColor: "#B97A95", color: "white" }}>
            All Students
            </Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;