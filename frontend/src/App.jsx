import React, { useEffect, useState } from 'react';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json()).then(data => setData(data))
      .catch(err => console.log(err));
  }, []);
  return (

    <div style={{ padding: "50px" }} >
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

  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
