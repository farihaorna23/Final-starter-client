import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  },
  customizeAppBar: {
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },

}));

const NewStudentView = (props) => {
  const { handleChange, handleSubmit, firstname, lastname, email, imageUrl, gpa, campusname, allCampuses, campusId } = props;
  const classes = useStyles();

  return (
    <div style={{ minHeight: "calc(100vh - 114px)"}} className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
            New Student
          </Typography>
        </div>
        <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>First Name: </label>
          <input value={firstname} type="text" name="firstname" onChange={(e) => handleChange(e)} />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last Name: </label>
          <input value={lastname} type="text" name="lastname" onChange={(e) => handleChange(e)} />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Email: </label>
          <input value={email} type="text" name="email" onChange={(e) => handleChange(e)} />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image: </label>
          <input placeholder="Enter Image Address" value={imageUrl} type="text" name="imageUrl" onChange={(e) => handleChange(e)} />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>GPA: </label>
          <input value={gpa} type="text" name="gpa" onChange={(e) => handleChange(e)} />
          <br />
          <br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus Name: </label>
          <select value={campusname} name="campusname" onChange={(e) => handleChange(e)}>
            <option>Select A Campus</option>
            {allCampuses.map(campus =>{
              return <option value={campus.name}  key={campus.id}>{campus.name}</option>
            })}
          </select>
          <br />
          <br />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br />
          <br />
        </form>
      </div>
    </div>

  )
}

export default NewStudentView;