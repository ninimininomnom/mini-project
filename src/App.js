import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import Navbar from './pages/navbar';


import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
}

export default App;
