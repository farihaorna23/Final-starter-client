import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk } from "../../store/thunks";

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
        redirectId: null
    };
}

  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);

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
  }

  submitUpdate=(e,campus)=>{
    e.preventDefault();
    this.props.editCampus(campus);
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
      />
    );
  }

}


// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (campus) =>dispatch(editCampusThunk(campus))
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);