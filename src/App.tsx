import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import EventDetails from './components/EventDetails';
import About from './components/About';
import Events from './page/Events';
import ResourcesPage from './page/ResourcesPage';
// import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className='overflow-x-hidden'>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
    </div>
  );
};

export default App;
