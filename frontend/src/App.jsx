import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const App = () => {
  return (
    <div style={{padding:"1%"}}>
    <div className="d-flex" >
      <Sidebar />
      <div  className="bg-light" style={{ width: '100vw' }}>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-1">
              <MainContent/>
            </div>
          </div>
       
      </div>
    </div>
    </div>
  );
};

export default App;
