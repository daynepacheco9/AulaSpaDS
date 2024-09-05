
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
