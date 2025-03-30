import React, { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './AdminDashboardPage.css';

const AdminDashboardPage = () => {
    const [admin, setAdmin] = useState(null);
    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            setAdmin(currentUser)
        } else {
            navigate('/login');
        }
    }, [auth, navigate]);

  return (
    <div className='admin-dashboard'>
        <aside className='sidebar'>
            <h2>Admin Panel</h2>
            <ul className='nav-links'>
               <li onClick={() => navigate('/manage-users')}>Manage Users</li>
                <li onClick={() => navigate('/manage-colleges')}>Manage Colleges</li>
                <li onClick={() => navigate('/manage-careers')}>Manage Careers</li>
                <li onClick={() => navigate('/view-registrations')}>View Registrations</li>
            </ul> 
        </aside>
              

        <main className='main-content'>
            <div className='dashboard-header'>
                <h2>Welcome, {admin?.displayName || "Admin"}</h2>
                <p>Email: {admin?.email}</p>
            </div>

            <div className='widget-container'>
                <div className='widget'>
                    <h3>Total Users</h3>
                    <p>150</p>
                </div>
                <div className='widget'>
                    <h3>College Listed</h3>
                    <p>45</p>
                </div>
                <div className='widget'>
                    <h3>Pending Registrations</h3>
                    <p>12</p>
                </div>
            </div>
        </main>

    </div>
  );
};

export default AdminDashboardPage;