import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from "prop-types";
import NewStudentView from '../views/NewStudentView';
import { addStudentThunk, fetchAllCampusesThunk } from '../../store/thunks';
import { Modal } from 'react-bootstrap'


class NewStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "" ,
      imageUrl: "",
      gpa:null,
      campusname:"",
      campusId: null,
      redirect: false,
      redirectId: null
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses(); //??
}

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });

    if(event.target.name=="campusname")
    {
      const foundcampus=this.props.allCampuses.find(campus=>campus.name==event.target.value)
      this.setState({
        campusId:foundcampus.id
      })
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    if(!this.state.firstname)
        {
            this.setState({errormsg: "First Name is required" , show:true})
            return
        }
        if(!this.state.lastname)
        {
            this.setState({errormsg: "Last Name is required" , show:true})
            return
        }
        if(!this.state.email)
        {
            this.setState({errormsg: "Email is required" , show:true})
            return
        }

    let student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      campusId: this.state.campusId,
      email:this.state.email,
      imageUrl:this.state.imageUrl,
      gpa:this.state.gpa,
    };

    let newStudent = await this.props.addStudent(student);

    this.setState({
      firstname: "",
      lastname: "",
      email:"",
      imageUrl:"",
      gpa:"",
      campusId: null,
      campusname:"",
      redirect: true,
      redirectId: newStudent.id,
      show:false,
      errormsg:"",
    });
  }

  handleClose = () => this.setState({show:false})
  handleShow = () => this.setState({show:true})

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`} />)
    }
    return (
      <>
      <NewStudentView
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        email={this.state.email}
        imageUrl={this.state.imageUrl} 
        gpa={this.state.gpa}
        campusname={this.state.campusname}
        allCampuses={this.props.allCampuses}
        campusId={this.state.campusId}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
         <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Missing Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.errormsg}
        </Modal.Body>
      </Modal>
      </>
    );
  }
}

// Map state to props;
//is this how are we gonna access our state in our component?
const mapState = (state) => {
return {
  allCampuses: state.allCampuses,
};
};


const mapDispatch = (dispatch) => {
  return ({
    addStudent: (student) => dispatch(addStudentThunk(student)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  })
}


// Type check props;
NewStudentContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
  addStudent: PropTypes.func.isRequired,
  };
  

export default connect(mapState, mapDispatch)(NewStudentContainer);