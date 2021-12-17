import { Link } from 'react-router-dom'
import "../../bootstrap.min.css"
import { Button, Modal, Form } from 'react-bootstrap'
import { useState } from "react"

const StudentView = (props) => {
  const { student, firstname, lastname, email, imageUrl, gpa, campusname, campusId, submitUpdate, handleChange, allCampuses } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <img src={student.imgUrl ? student.imgUrl : `${process.env.PUBLIC_URL}/img/userprofile.png`} alt={student.firstname} />
      <h1 className="studentinfo">{student.firstname + " " + student.lastname}</h1>
      {student.campusId ? <h3><Link className="studentinfo" to={`/campus/${student.campusId}`}>{student.campus.name}</Link></h3> : <h3 className="studentinfo">The student isn't enrolled in any campus</h3>}
      <p className="studentinfo">Email: {student.email}</p>
      {student.gpa && <p className="studentinfo"> GPA: {student.gpa}</p>}
      <button onClick={handleShow}>Edit Student Information</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => {
            submitUpdate(e, { firstname, lastname, email, gpa, imageUrl, campusId, id: student.id })
            handleClose()
          }}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>First Name: </Form.Label>
              <Form.Control type="text" value={firstname} name="firstname" placeholder="Enter First Name" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Last Name: </Form.Label>
              <Form.Control type="text" value={lastname} name="lastname" placeholder="Enter Last Name" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email: </Form.Label>
              <Form.Control type="text" value={email} name="email" placeholder="Enter Email" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label> ImageUrl: </Form.Label>
              <Form.Control type="text" value={imageUrl} name="imageUrl" placeholder="Enter Image Address" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicGPA">
              <Form.Label> GPA: </Form.Label>
              <Form.Control type="text" value={gpa} name="gpa" placeholder="Enter GPA" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicGPA">
              <Form.Label> Campus Name: </Form.Label>
              <Form.Select name="campusname" value={campusname} onChange={handleChange} aria-label="Default select example">
                <option>Select Campus</option>
                {allCampuses.map(campus =>{
              return <option value={campus.name}  key={campus.id}>{campus.name}</option>
            })}
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

    </div>
  );

};

export default StudentView;