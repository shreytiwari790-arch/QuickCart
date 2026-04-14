import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!isLogin) {
      // Handle Registration
      if (password.length < 5) {
        setError('Password must be at least 5 characters long.');
        return;
      }

      // Check if user already exists
      const existingUser = localStorage.getItem('cartify_user_' + email);
      if (existingUser) {
        setError('An account with this email already exists.');
        return;
      }

      // Save user to local storage (mock backend)
      const user = { name, email, password };
      localStorage.setItem('cartify_user_' + email, JSON.stringify(user));
      
      // Navigate to homepage softly after registering
      navigate('/');
    } else {
      // Handle Login
      const savedUserStr = localStorage.getItem('cartify_user_' + email);
      if (!savedUserStr) {
        setError('No account found with this email. Please register.');
        return;
      }

      const savedUser = JSON.parse(savedUserStr);
      if (savedUser.password === password) {
        // Success
        navigate('/');
      } else {
        setError('Incorrect password. Please try again.');
      }
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setPassword('');
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[75vh] px-4 py-12">
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-[28px] font-bold text-gray-900 mb-2.5">
              {isLogin ? 'Welcome Back' : 'Create an Account'}
            </h2>
            <p className="text-gray-500 text-[15px]">
              {isLogin 
                ? 'Enter your details to access your account.' 
                : 'Sign up to start shopping with Cartify.'}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm text-center font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {!isLogin && (
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4bc2e8] focus:ring-1 focus:ring-[#4bc2e8] text-sm"
                />
              </div>
            )}
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-semibold text-gray-700">Email Address</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4bc2e8] focus:ring-1 focus:ring-[#4bc2e8] text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[14px] font-semibold text-gray-700">Password</label>
                {isLogin && <a href="#" className="text-[13px] font-medium text-[#4bc2e8] hover:underline">Forgot password?</a>}
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4bc2e8] focus:ring-1 focus:ring-[#4bc2e8] text-sm"
              />
            </div>

            <button 
              type="submit" 
              className="mt-6 w-full bg-black hover:bg-gray-800 text-white font-medium py-3 rounded-xl transition-colors shadow-sm"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-8 text-center text-[14px] text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              type="button"
              onClick={switchMode}
              className="font-bold text-[#4bc2e8] hover:text-[#3ab2d8] hover:underline focus:outline-none transition-all ml-1"
            >
              {isLogin ? 'Register now' : 'Log in instead'}
            </button>
          </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default Login;
