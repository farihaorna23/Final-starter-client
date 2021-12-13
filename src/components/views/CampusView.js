import { Link } from 'react-router-dom'
import "../../bootstrap.min.css"
import { Button, Modal, Form } from 'react-bootstrap'
import { useState } from "react"

const CampusView = (props) => {
  const { campus, name, address, imageUrl, description, submitUpdate, handleChange } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <img src={campus.imageUrl ? campus.imageUrl : `${process.env.PUBLIC_URL}/img/College.jpeg`} />
      <p className="campusinfo">{campus.name}</p>
      <p className="campusinfo">{campus.description}</p>
      <p className="campusinfo">{campus.address}</p>
      {campus.students && campus.students.length > 0 ? (
        <ul>
          {campus.students.map(student => {
            let name = student.firstname + " " + student.lastname;
            return (
              <li key={student.id}><Link className="campusinfo" to={`/student/${student.id}`}>{name}</Link></li>
            );
          })}
        </ul>
      ) : (
          <p className="campusinfo">There is no students associated with this campus</p>
        )}

      <button onClick={handleShow}>Edit Campus Information</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e)=>{
            submitUpdate(e,{name, address, description, imageUrl,id:campus.id})
            handleClose()
            }}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Campus Name: </Form.Label>
              <Form.Control type="text" value={name} name="name" placeholder="Enter Campus Name" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address: </Form.Label>
              <Form.Control type="text" value={address} name="address" placeholder="Enter Adress" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label> Description: </Form.Label>
              <Form.Control type="text" value={description} name="description" placeholder="Enter Description" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label> ImageUrl: </Form.Label>
              <Form.Control type="text" value={imageUrl} name="imageUrl" placeholder="Enter Image Address" onChange={handleChange} />
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

export default CampusView;