
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowRight, Calendar, Dumbbell, Users, Clock } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Navbar />
      
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="pt-28 pb-16 md:pt-40 md:pb-20 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 md:pr-12 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 animate-fade-in">
                  Book Your Perfect <span className="text-gymBlue-500">Workout Time</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg animate-fade-in animation-delay-100">
                  Reserve your spot at the university gym with our easy-to-use booking platform. Find the perfect time to exercise without the crowds.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-200">
                  <Link
                    to="/calendar"
                    className="px-6 py-3 rounded-full bg-black text-gymBlue-500 font-medium transition-all duration-300 hover:bg-gymBlue-600 active:scale-95 text-center"
                  >
                    Book Now
                  </Link>
                  <Link
                    to="/about"
                    className="px-6 py-3 rounded-full border border-black hover:border-gymBlue-900 hover:bg-gymBlue-500 transition-all duration-300 font-medium text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative mx-auto max-w-md">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl animate-fade-in">
                    <img
                      src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                      alt="University gym"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="glass absolute -bottom-4 -right-4 p-4 rounded-xl max-w-xs animate-fade-in animation-delay-300">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                        <Clock size={16} />
                      </div>
                      <div className="ml-3">
                        <p className="text-xs text-muted-foreground">Available Slots Today</p>
                        <p className="font-semibold">15 open spots</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose UniGym?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our booking system makes it easy to plan your workouts around your busy schedule.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Calendar,
                  title: 'Easy Scheduling',
                  description: 'Book your gym sessions in advance to ensure you always have a spot.',
                },
                {
                  icon: Users,
                  title: 'Avoid Crowds',
                  description: 'See how many people have booked each time slot to avoid busy periods.',
                },
                {
                  icon: Dumbbell,
                  title: 'Access All Equipment',
                  description: 'View available equipment for each session before booking.',
                },
              ].map((feature, index) => (
                <div 
                  key={feature.title}
                  className="glass p-6 rounded-xl card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-12 w-12 rounded-full bg-gymBlue-100 flex items-center justify-center text-gymBlue-600 mb-4">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Book your gym session in just a few simple steps.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: 'Create an Account',
                  description: 'Register with your university email to get started.',
                },
                {
                  step: 2,
                  title: 'Browse Available Slots',
                  description: 'View the calendar to see available time slots.',
                },
                {
                  step: 3,
                  title: 'Reserve Your Spot',
                  description: 'Select your preferred time and confirm your booking.',
                },
                {
                  step: 4,
                  title: 'Enjoy Your Workout',
                  description: 'Show up at your booked time and exercise hassle-free.',
                },
              ].map((step) => (
                <div 
                  key={step.step}
                  className="flex flex-col items-center animate-fade-in"
                  style={{ animationDelay: `${(step.step - 1) * 100}ms` }}
                >
                  <div className="h-16 w-16 rounded-full bg-gymBlue-500 text-white flex items-center justify-center text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                  <p className="text-muted-foreground text-center">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link
                to="/register"
                className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white font-medium transition-all duration-300 hover:bg-gymBlue-600 active:scale-95"
              >
                Get Started <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-black text-white px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Gym Experience?</h2>
                <p className="text-white/80 max-w-xl">
                  Join thousands of students who have already improved their workout routine with our booking system.
                </p>
              </div>
              <Link
                to="/register"
                className="px-8 py-4 rounded-full bg-white text-gymBlue-600 font-medium text-lg transition-all duration-300 hover:bg-gray-100 active:scale-95"
              >
                Register Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
