import React from 'react';
import Admin from './pages/Admin';
import LoginPage from './pages/LoginPage';
const MainContent = () => {
  return (
    <div id="page-content-wrapper" className="bg-light" style={{ width: '70%' }}>
      <div className="container-fluid">
        <h1 className="mt-4">Main Content</h1>
        <p>This is the main content area.</p>
        {/* <Admin/> */}
        <LoginPage/>
      </div>
    </div>
  );
}

export default MainContent;
