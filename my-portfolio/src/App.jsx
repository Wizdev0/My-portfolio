import './App.css'
import { HomePage } from './Pages/HomePage';
import { ProjectPage } from './Pages/ProjectPage';
import { BrowserRouter, Routes, Route } from 'react-router';
import ScrollToTop from './Components/ScrollToTop';
import { useState } from 'react';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectPage />} />
          </Routes>
    </BrowserRouter>

  );
}

export default App
