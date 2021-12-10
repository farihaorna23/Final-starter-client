import {Link} from 'react-router-dom'

const CampusView = (props) => {
  const { campus } = props;
  return (
    <div>
      <img src={campus.imageUrl ? campus.imageUrl : `${process.env.PUBLIC_URL}/img/College.jpeg`} />
      <p>{campus.name}</p>
      <p>{campus.description}</p>
      <p>{campus.address}</p>
      {campus.students.length > 0 ? (
        <ul>
          {campus.students.map(student => {
            let name = student.firstname + " " + student.lastname;
            return (
              <li key={student.id}><Link to= {`/student/${student.id}`}>{name}</Link></li>
            );
          })}
        </ul>
      ) : (
          <p>There is no students associated with this campus</p>
        )}

    </div>
  );

};

export default CampusView;