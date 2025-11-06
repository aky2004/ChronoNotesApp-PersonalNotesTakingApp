import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { post } from '../services/ApiEndPoint'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { logout } from '../Redux/AuthSlice'
import { ThemeContext } from '../App';
import { MdLightMode, MdDarkMode } from "react-icons/md";


export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogout = async () => {
    try {
      const request = await post('http://localhost:4000/auth/logout');
      const response = request.data;
      console.log(response);
      if (response.success) {
        toast.success(response.message);
        dispatch(logout());
        navigate('/login');
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
      console.log(error);
    }
  };
  return (
    <header className="py-3">
      <div className="container-fluid">
        <div className="card border-0 shadow-sm">
          <div className="card-body p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="navbar-brand m-0 fs-4 d-flex align-items-center gap-1">
                <span className="text-primary fw-bold">Note</span>
                <span className="fw-light" style={{color: 'inherit'}}>Hub</span>
              </h1>
              <div className="d-flex align-items-center gap-3">
                <button 
                  type="button" 
                  className="btn btn-light d-flex align-items-center justify-content-center"
                  onClick={toggleTheme}
                  style={{width: '42px', height: '42px', padding: 0}}
                >
                  {theme === 'light' 
                    ? <MdDarkMode size={22} /> 
                    : <MdLightMode size={22} />
                  }
                </button>
                <button 
                  type="button" 
                  className="btn btn-danger px-4 py-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
