import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  footerBar:{
    backgroundColor: '#F6AE99',
    shadows: ['none'],
    display: "flex",
    justifyContent:"center",
    width:"100%",
    height: "50px",
    alignItems:"center"
  },
  links:{
    textDecoration: 'none',
    color: '#716F81'
  }

}));



const Footer= ()=>{
    const classes = useStyles();
    return(
        <footer className={classes.footerBar}>
        <div>Icons made by <a className={classes.links} href="https://www.flaticon.com/authors/smashingstocks" title="smashingstocks">smashingstocks</a> and <a className={classes.links} href="https://www.flaticon.com/authors/aficons-studio" title="Aficons studio">Aficons studio</a> from <a className={classes.links} href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer> 
    )
}

export default Footer;