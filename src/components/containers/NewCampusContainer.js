import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from "prop-types";
import NewCampusView from '../views/NewCampusView';
import { addCampusThunk,} from '../../store/thunks';



class NewCampusContainer extends Component {
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
    
   

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });       
    }

    handleSubmit = async event => {
        event.preventDefault();

        let campus = {
            name: this.state.name,
            description: this.state.description,
            address: this.state.address,
            imageUrl:this.state.imageUrl,

        };

        let newCampus = await this.props.addCampus(campus);

        this.setState({
            name: "",
            description: "",
            address:"",
            imageUrl:"",
            redirect: true,
            redirectId: newCampus.id
        });
    }

    componentWillUnmount() {
        this.setState({ redirect: false, redirectId: null });
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/campus/${this.state.redirectId}`} />)
        }
        return (
            <NewCampusView
                name={this.state.name}
                address={this.state.adress}
                imageUrl={this.state.imageUrl}
                description={this.state.description} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

const mapDispatch = (dispatch) => {
    return ({
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
    })
}




// Type check props;
NewCampusContainer.propTypes = {
  addCampus: PropTypes.func.isRequired,
};





export default connect(null, mapDispatch)(NewCampusContainer);