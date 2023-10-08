import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Admin = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);
  
  return (
    <div className="container mt-4">
      <div>
        <h1>User Page</h1>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.username}</td>
              {/* <td>{d.password}</td> */}
              <td>{d.role}</td>
            </tr>

          )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
