import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './pages/App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Toaster} from "react-hot-toast";
import Home from './pages/Home';
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import LoginLec from './pages/LoginLec';
import RegisterLec from './pages/RegisterLec';
import HomeLec from './pages/HomeLec';
import Profile from './pages/Profile';
import Consultations from "./pages/Consultations";
import Request from "./pages/Request";
import ConsultationsLec from "./pages/ConsultationsLec";
import ProfileLec from "./pages/ProfileLec";

function App() {
  return (
    <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false}/>
      <Routes>
        <Route path ='/login' element = {<PublicRoute><Login /></PublicRoute>} />
        <Route path ='/loginLec' element = {<PublicRoute><LoginLec /></PublicRoute>} />
        <Route path ='/register' element = {<PublicRoute><Register /></PublicRoute>} />
        <Route path ='/registerLec' element = {<PublicRoute><RegisterLec /></PublicRoute>} />
        <Route path ='/' element = {<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path ='/homeLec' element = {<ProtectedRoute><HomeLec /></ProtectedRoute>} />
        <Route path ='/profile' element = {<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path ='/profileLec' element = {<ProtectedRoute><ProfileLec /></ProtectedRoute>} />
        <Route path ='/consultations' element = {<ProtectedRoute><Consultations /></ProtectedRoute>} />
        <Route path ='/consultationsLec' element = {<ProtectedRoute><ConsultationsLec /></ProtectedRoute>} />
        <Route path ='/request' element = {<ProtectedRoute><Request /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
