

const CampusView = (props) => {
  const { campus } = props;
  return (
    <div>
      <img src={campus.imageUrl ? campus.imageUrl : `${process.env.PUBLIC_URL}/img/College.jpeg` }/>
      <p>{campus.name}</p>
      <p>{campus.description}</p>
      <p>{campus.address}</p>
      <ul>
        {campus.students.map(student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <li key={student.id}>{name}</li>
          );
        })}
      </ul>
    </div>
  );

};

export default CampusView;