import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
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
    color: '#CDDC39'
  },
  greeting:{
    display: 'flex',
    justifyContent: 'space-around',
    width: "80%",
    margin: "auto",
    minHeight: "calc(100vh - 114px)",
    alignItems: "center"
  },
  links:{
    textDecoration: 'none',
  }
  

}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>  
      <div className={classes.greeting}>
      <Link to="/campuses">
        <div>
          <img style={{width:"300px"}} src={`${process.env.PUBLIC_URL}/img/university.png`}/>
          <h1>View Campuses</h1>
        </div>
      </Link>

      <Link to="/students">
        <div>
          <img style={{width:"300px"}} src={`${process.env.PUBLIC_URL}/img/graduating-student.png`}/>
          <h1>View Students</h1>
        </div>
      </Link>
      </div>
    </div>
  );    
}




export default HomePageView;
