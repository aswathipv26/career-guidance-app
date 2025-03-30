import React, {useEffect, useState} from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/login')
      }
   
  }, [auth, navigate]);


  return (
    <div className="dashboard">
      <h2>Welcome, {user?.displayName || "User"}</h2>
      <p>Email: {user?.email}</p>
      <div className="dashboard-links">
        <button onClick={() => navigate("/career")}>Explore Careers</button>
        <button onClick={() => navigate("/college")}>Find Colleges</button>
        <button onClick={() => navigate("/eligibility")}>Check Eligibility</button>
        <button onClick={() => navigate("/aptitude")}>Take Aptitude Test</button>
      </div>
    </div>
  );
};

export default DashboardPage;
