import { Link } from 'react-router-dom'
import "../../bootstrap.min.css"
import { Button, Modal, Form } from 'react-bootstrap'
import { useState } from "react"

const CampusView = (props) => {
  const { campus, name, address, imageUrl, description, submitUpdate, handleChange, handleStudentRemove, allStudents, handleStudentAdd, errormsg, showerror, showmodal, handleShow, handleClose } = props;
  const [showDropDown, setShowDropDown] =useState(false);
  const [selectStudent, setSelectStudent]= useState("");
  

  return (
    <div style={{ minHeight: "calc(100vh - 114px)"}}>
      <img src={campus.imageUrl ? campus.imageUrl : `${process.env.PUBLIC_URL}/img/College.jpeg`} />
      <p className="campusinfo"> Campus Name: {campus.name}</p>
      <p className="campusinfo"> Description: {campus.description}</p>
      <p className="campusinfo"> Address: {campus.address}</p>
      {campus.students && campus.students.length > 0 ? ( 
        <>
        <p  className="campusinfo"> Student(s):</p>
        <ul>
          {campus.students.map(student => {
            let name = student.firstname + " " + student.lastname;
            return (
              <li style={{display:"flex"}} key={student.id}> 
              <Link className="campusinfo" to={`/student/${student.id}`}>{name}</Link>
              <button style={{border:"none", backgroundColor:"transparent"}} onClick={() =>handleStudentRemove(student)}><i style={{color:"red", fontSize:"18px"}} className="fas fa-times-circle"></i></button>
              </li>
            );
          })}
        </ul>
        </>
      ) : (
          <p className="campusinfo">There is no students associated with this campus</p>
        )}
      <Button variant="contained" style={{ margin: "10px 10px 10px 0px" , backgroundColor: "#B97A95", color: "white" }} onClick={()=>setShowDropDown(true)}>Enroll A Student</Button>
      <Button variant="contained" style={{ margin: "10px 0px" , backgroundColor: "#B97A95", color: "white" }} onClick={handleShow}>Edit Campus Information</Button>
      {showDropDown && (
        <div>
      <select style={{height: "35px", backgroundColor: "#B97A95", color: "white"}} onChange={(e)=> setSelectStudent(e.target.value)} value={selectStudent}>
        <option>Select A Student</option>
        {allStudents.map(student =>{
              return <option value={student.id}  key={student.id}>{student.firstname} {student.lastname}</option>
            })}
      </select>
      <Button variant="contained" style={{ margin: "10px 0px" , backgroundColor: "#B97A95", color: "white" }} onClick={()=>handleStudentAdd(selectStudent)}>Enroll</Button>
      </div>
      )}
      <Modal show={showmodal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Campus Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e)=>{
            submitUpdate(e,{name, address, description, imageUrl,id:campus.id})
            handleClose()
            }}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Campus Name: </Form.Label>
              <Form.Control type="text" value={name} name="name" placeholder="Enter Campus Name" onChange={handleChange} />
              { showerror && errormsg === "Campus Name is required" && <Form.Text  style={{color:"red", marginLeft: "5px" }}>{errormsg} </Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address: </Form.Label>
              <Form.Control type="text" value={address} name="address" placeholder="Enter Adress" onChange={handleChange} />
              { showerror && errormsg === "Address is required" && <Form.Text style={{color:"red", marginLeft: "5px" }}>{errormsg} </Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label> Description: </Form.Label>
              <Form.Control type="text" value={description} name="description" placeholder="Enter Description" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label> ImageUrl: </Form.Label>
              <Form.Control type="text" value={imageUrl} name="imageUrl" placeholder="Enter Image Address" onChange={handleChange} />
            </Form.Group>
            
            <Button variant="primary" type="submit" disabled={showerror}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

    </div>
  );

};

export default CampusView;