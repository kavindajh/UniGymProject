
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../utils/auth';
import { toast } from 'sonner';

interface AuthFormProps {
  type: 'login' | 'register';
  role: UserRole;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, role }) => {
  const navigate = useNavigate();
  const { loginStudent, loginStaff, register } = useAuth();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secretCode, setSecretCode] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (type === 'login') {
        if (role === 'student') {
          await loginStudent(email, password);
          toast.success('Login successful');
        } else {
          await loginStaff(name, secretCode);
          toast.success('Staff login successful');
        }
        navigate('/calendar');
      } else {
        await register(name, email, password, role);
        toast.success('Registration successful');
        navigate('/success');
      }
    } catch (error) {
      console.error('Auth error:', error);
      toast.error(error instanceof Error ? error.message : 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      {/* Name field - for staff login and all registrations */}
      {(role === 'staff' || type === 'register') && (
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gymBlue-500 transition duration-200"
            placeholder="Enter your full name"
          />
        </div>
      )}
      
      {/* Email field - for student login and all registrations */}
      {(role === 'student' || type === 'register') && (
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gymBlue-500 transition duration-200"
            placeholder="university@email.edu"
          />
        </div>
      )}
      
      {/* Password field - for student login and all registrations */}
      {(role === 'student' || type === 'register') && (
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gymBlue-500 transition duration-200"
            placeholder="••••••••"
          />
        </div>
      )}
      
      {/* Secret code field - only for staff login */}
      {role === 'staff' && type === 'login' && (
        <div className="space-y-2">
          <label htmlFor="secretCode" className="text-sm font-medium">
            Secret Code
          </label>
          <input
            id="secretCode"
            type="password"
            value={secretCode}
            onChange={(e) => setSecretCode(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gymBlue-500 transition duration-200"
            placeholder="••••••"
          />
        </div>
      )}
      
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-6 bg-gymBlue-500 text-white font-medium rounded-lg hover:bg-gymBlue-600 focus:outline-none focus:ring-2 focus:ring-gymBlue-500 focus:ring-offset-2 transition duration-200 active:scale-98 disabled:opacity-70"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {type === 'login' ? 'Logging in...' : 'Registering...'}
          </span>
        ) : (
          <>{type === 'login' ? 'Sign In' : 'Create Account'}</>
        )}
      </button>
    </form>
  );
};

export default AuthForm;
