
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Success = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if no user (shouldn't be on success page without registering)
  useEffect(() => {
    if (!user) {
      navigate('/register');
    }
  }, [user, navigate]);
  
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full glass rounded-xl p-8 animate-fade-in">
        <div className="text-center mb-6">
          <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Registration Successful!</h1>
          <p className="text-muted-foreground">
            Your account has been created successfully. You can now book gym sessions.
          </p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-100 p-4 mb-6">
          <h2 className="font-medium mb-2">Account Information</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Name:</span>
              <span className="font-medium">{user?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email:</span>
              <span className="font-medium">{user?.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Account Type:</span>
              <span className="font-medium capitalize">{user?.role}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/calendar"
            className="flex items-center justify-center w-full p-3 bg-gymBlue-500 text-white font-medium rounded-lg hover:bg-gymBlue-600 transition-colors"
          >
            <Calendar size={18} className="mr-2" />
            Book Your First Session
          </Link>
          
          <Link
            to="/"
            className="flex items-center justify-center w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Return to Homepage
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Success;
