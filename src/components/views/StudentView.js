import {Link} from 'react-router-dom'

const StudentView = (props) => {
  const { student } = props;
  return (
    <div>
      <img src={student.imgUrl ? student.imgUrl :`${process.env.PUBLIC_URL}/img/userprofile.png`} alt={student.firstname} />
      <h1>{student.firstname + " " + student.lastname}</h1>
      {student.campusId ? <h3><Link to= {`/campus/${student.campusId}`}>{student.campus.name}</Link></h3> : <h3>The student doesn't have a campus</h3>}
      <p>Email: {student.email}</p>
      {student.gpa && <p> GPA: {student.gpa}</p>}

      
    </div>
  );

};

export default StudentView;