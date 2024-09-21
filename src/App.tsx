import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UnderMaintenance from './components/UnderMaintenance';
// import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UnderMaintenance />} />
      </Routes>
    </div>
  );
};

export default App;
