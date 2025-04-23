
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AuthForm from '../components/auth/AuthForm';
import { UserRole } from '../utils/auth';
import { User, Users } from 'lucide-react';

const Register = () => {
  const [selectedTab, setSelectedTab] = useState<'student' | 'staff'>('student');
  const [mode, setMode] = useState<'login' | 'register'>('login');
  
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-28 pb-16">
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-md">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold mb-4 animate-fade-in">
                {mode === 'login' ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-muted-foreground animate-fade-in animation-delay-100">
                {mode === 'login' 
                  ? 'Sign in to book your gym slots and manage your schedule.'
                  : 'Register to start booking your gym sessions.'}
              </p>
            </div>
            
            <div className="glass rounded-xl overflow-hidden animate-fade-in animation-delay-200">
              {/* Tab Selector */}
              <div className="grid grid-cols-2 border-b border-gray-100">
                <button
                  onClick={() => setSelectedTab('student')}
                  className={`flex items-center justify-center p-4 text-sm font-medium transition-colors ${
                    selectedTab === 'student' 
                      ? 'bg-white text-gymBlue-600 border-b-2 border-gymBlue-500' 
                      : 'text-muted-foreground hover:bg-white/50'
                  }`}
                >
                  <User size={18} className="mr-2" />
                  Student
                </button>
                <button
                  onClick={() => setSelectedTab('staff')}
                  className={`flex items-center justify-center p-4 text-sm font-medium transition-colors ${
                    selectedTab === 'staff' 
                      ? 'bg-white text-gymBlue-600 border-b-2 border-gymBlue-500' 
                      : 'text-muted-foreground hover:bg-white/50'
                  }`}
                >
                  <Users size={18} className="mr-2" />
                  Gym Staff
                </button>
              </div>
              
              <div className="p-6">
                <AuthForm 
                  type={mode} 
                  role={selectedTab as UserRole} 
                />
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
                    <button
                      onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                      className="ml-1 text-gymBlue-600 hover:underline"
                    >
                      {mode === 'login' ? 'Register' : 'Sign In'}
                    </button>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Information box */}
            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm animate-fade-in animation-delay-300">
              {selectedTab === 'student' ? (
                <div>
                  <h3 className="font-medium mb-2 text-blue-800">Student Access</h3>
                  <p className="text-blue-700 mb-2">
                    Register with your university email address to gain access to the gym booking system.
                  </p>
                  <p className="text-blue-700">
                    You'll be able to book time slots, view equipment availability, and manage your gym schedule.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="font-medium mb-2 text-blue-800">Gym Staff Access</h3>
                  <p className="text-blue-700 mb-2">
                    Staff access is limited to authorized gym personnel only.
                  </p>
                  <p className="text-blue-700">
                    You'll need your staff name and the assigned secret code to access the management features.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Register;
