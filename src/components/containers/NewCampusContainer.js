import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from "prop-types";
import NewCampusView from '../views/NewCampusView';
import { addCampusThunk,} from '../../store/thunks';
import { Modal } from 'react-bootstrap'


class NewCampusContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            address: "",
            imageUrl: "",
            redirect: false,
            redirectId: null,
            show:false,
            errormsg:"",
        };
    }
    

    handleClose = () => this.setState({show:false})
    handleShow = () => this.setState({show:true})

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });       
    }

    handleSubmit = async event => {
        event.preventDefault();
        if(!this.state.name)
        {
            this.setState({errormsg: "Campus Name is required" , show:true})
            return
        }
        if(!this.state.address)
        {
            this.setState({errormsg: "Address is required" , show:true})
            return
        }

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
            <>
            <NewCampusView
                name={this.state.name}
                address={this.state.adress}
                imageUrl={this.state.imageUrl}
                description={this.state.description} 
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