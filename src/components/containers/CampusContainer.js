import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk, editStudentThunk, fetchAllStudentsThunk} from "../../store/thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        description: "",
        address: "",
        imageUrl: "",
        redirect: false,
        redirectId: null,
    };
}

  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
    this.props.fetchAllStudents();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.campus != this.props.campus)
    {
      this.setState({
        name: this.props.campus.name,
        description: this.props.campus.description,
        address:this.props.campus.address,
        imageUrl: this.props.campus.imageUrl,
      })
    }

    if(prevProps.student != this.props.student)
    {
      this.props.fetchCampus(this.props.match.params.id);
    }
  }

  submitUpdate=(e,campus)=>{
    e.preventDefault();
    this.props.editCampus(campus);

  }

  handleStudentRemove=(student)=>{
    student.campusId=null;
    this.props.editStudent(student);
  }

  handleChange=(e)=>{
    this.setState({
    [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <CampusView 
        campus={this.props.campus}
        submitUpdate={this.submitUpdate}
        name={this.state.name}
        description={this.state.description}
        imageUrl={this.state.imageUrl}
        address={this.state.address}
        handleChange={this.handleChange}
        handleStudentRemove={this.handleStudentRemove}
      />
    );
  }

}


// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
    student: state.student,
    allStudents: state.allStudents
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (campus) =>dispatch(editCampusThunk(campus)),
    editStudent: (student) =>dispatch(editStudentThunk(student)),
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk())
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);