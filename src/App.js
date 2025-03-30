import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AuthForm from './components/AuthForm/AuthForm';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import CareerSelectionPage from './pages/CareerSelectionPage/CareerSelectionPage';
import CollegeListPage from './pages/CollegeListPage/CollegeListPage';
import EligibilityCheckPage from './pages/EligibilityCheckPage/EligibilityCheckPage';
import AptitudeTestPage from './pages/AptitudeTestPage/AptitudeTestPage';
import AdminDashboardPage from './pages/AdminDashboardPage/AdminDashboardPage';


const App = () => {

  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/career-guidance-app' element={<HomePage />}/>
        <Route path='/register' element={<AuthForm isRegister={true} />}/>
        <Route path='/login' element={<AuthForm isRegister={false}/>} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/career' element={<CareerSelectionPage />} />
        <Route path='/college'  element={<CollegeListPage />} />
        <Route path='/eligibility' element={<EligibilityCheckPage />} />
        <Route path='/aptitude' element={<AptitudeTestPage />} />
        <Route path='/admin' element={<AdminDashboardPage />} />
        <Route path='/' />
      </Routes>
    </Router>
  );
}

export default App; 
