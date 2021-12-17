import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, editStudentThunk, fetchAllCampusesThunk } from "../../store/thunks";
import { StudentView } from "../views";

class StudentContainer extends Component {
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
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
    this.props.fetchAllCampuses();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.student != this.props.student)
    {
      this.setState({
        firstname:this.props.student.firstname,
        lastname:this.props.student.lastname,
        email:this.props.student.email, 
        imageUrl:this.props.student.imageUrl,
        gpa:this.props.student.gpa,
        campusname:this.props.student.campus ? this.props.student.campus.name : "",
        campusId:this.props.student.campusId
      })
    }
  }

  submitUpdate=(e,student)=>{
    e.preventDefault();
    this.props.editStudent(student);
  }

  handleChange=(e)=>{
    this.setState({
    [e.target.name]: e.target.value
    })

    if(e.target.name=="campusname")
    {
      const foundcampus=this.props.allCampuses.find(campus=>campus.name==e.target.value)
      this.setState({
        campusId:foundcampus.id
      })
    }
  }

  render() {
    return (
      <StudentView 
        student={this.props.student}
        submitUpdate={this.submitUpdate}
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        email={this.state.email}
        imageUrl={this.state.imageUrl}
        gpa={this.state.gpa}
        campusname={this.state.campusname}
        campusId={this.state.campusId}
        handleChange={this.handleChange}
        allCampuses={this.props.allCampuses}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
    allCampuses: state.allCampuses,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (student) =>dispatch(editStudentThunk(student)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);