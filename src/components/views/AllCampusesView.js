import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";

const AllCampusesView = (props) => {
  
  return (
    <div style={{ minHeight: "calc(100vh - 114px)"}}>
    {props.allCampuses.length ? (
    <div >
      {props.allCampuses.map((campus) => (
        <div style={{width:"450px"}} key={campus.id}>
          <div style={{display:"flex"}}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <button style={{border:"none", backgroundColor:"transparent"}} onClick={() => props.deleteCampus(campus.id)}><i style={{color:"red", fontSize:"28px"}} className="fas fa-times-circle"></i></button>
          </div>
          <img style={{width:"100%"}} src={campus.imageUrl ? campus.imageUrl : `${process.env.PUBLIC_URL}/img/College.jpeg`}/>
        </div>
      ))}
    </div>
    ) : <div>There are no campuses.</div>}
    <Link to="/newcampus"><Button variant="contained" style={{ margin: "10px 0px" , backgroundColor: "#B97A95", color: "white" }}>Add Campus</Button></Link>
    </div>

  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;