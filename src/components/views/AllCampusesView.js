import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  
  return (
    <div>
    {props.allCampuses.length ? (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <div style={{display:"flex"}}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <button style={{border:"none", backgroundColor:"transparent"}} onClick={() => props.deleteCampus(campus.id)}><i style={{color:"red", fontSize:"28px"}} className="fas fa-times-circle"></i></button>
          </div>
          <img src={campus.imgUrl ? campus.imgUrl : `${process.env.PUBLIC_URL}/img/College.jpeg`}/>
        </div>
      ))}
    </div>
    ) : <div>There are no campuses.</div>}
    <Link to="/newcampus"><button>Add Campus</button></Link>
    </div>

  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;