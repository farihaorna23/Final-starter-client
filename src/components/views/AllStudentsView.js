import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;

  if (!students.length) {
    return (
    <div style={{ minHeight: "calc(100vh - 114px)"}}>
      <p>There are no students.</p>
      <Link to='/newstudent'>
        <button>Add New Student</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div style={{ minHeight: "calc(100vh - 114px)"}}>
      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id} style={{display:"flex"}}>
          <Link to={`/student/${student.id}`}>
            <h1>{name}</h1>
          </Link>
          <button className="ml-4" style={{border:"none", backgroundColor:"transparent"}} onClick={() => deleteStudent(student.id)}><i style={{color:"red", fontSize:"28px"}} className="fas fa-times-circle"></i></button>
          </div>
        );
      }
      )}
      <Link to={`/newstudent`}>
      <Button variant="contained" style={{ margin: "10px 0px" , backgroundColor: "#B97A95", color: "white" }}>Add Student</Button>
      </Link>
    </div>
  );
};


export default AllStudentsView;