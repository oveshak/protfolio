import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
    
    const navigate = useNavigate();

    
    // Get the 'from' location or set it to home if undefined
const from=location.state?.from?.pathname || "/"

  // Local state for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit =async (e) => {
    e.preventDefault();
    
    // Call the login function from AuthContext
   
   await logIn(email, password);
   e.target.reset();
            
   // Delay navigation to ensure SweetAlert finishes
   setTimeout(() => {
      // Navigate to login page after refresh
      navigate(from,{replace:true})
      window.location.reload();
   }, 1000);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}  // Capture email input
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}  // Capture password input
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
