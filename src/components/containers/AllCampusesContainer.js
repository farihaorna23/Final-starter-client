import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, deleteCampusThunk} from "../../store/thunks";
import { AllCampusesView } from "../views";

class AllCampusesContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses(); //??
  }

  render() {
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
        deleteCampus={this.props.deleteCampus} 
      />
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

// Map dispatch to props;
//the thunk will dispatch to update the state due to on an onclick functionality?
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId)),
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);