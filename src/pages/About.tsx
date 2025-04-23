
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Users, Clock, Medal, Calendar } from 'lucide-react';

const About = () => {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-28">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About UniGym</h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in animation-delay-100">
                Making fitness accessible for all university students and staff.
              </p>
            </div>
            
            <div className="mt-12 glass rounded-2xl overflow-hidden animate-fade-in animation-delay-200">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="University gym overview"
                className="w-full h-80 md:h-[500px] object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* Our Mission Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-10 md:mb-0 md:pr-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At UniGym, we believe that fitness should be accessible to everyone on campus. Our mission is to create a seamless gym booking experience that allows students and staff to plan their workouts efficiently.
                </p>
                <p className="text-lg text-muted-foreground">
                  By implementing our intelligent scheduling system, we aim to reduce overcrowding, minimize wait times, and create a more enjoyable workout environment for the entire university community.
                </p>
              </div>
              
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: Users,
                      title: 'Community',
                      color: 'bg-blue-100 text-blue-600',
                    },
                    {
                      icon: Clock,
                      title: 'Efficiency',
                      color: 'bg-green-100 text-green-600',
                    },
                    {
                      icon: Medal,
                      title: 'Excellence',
                      color: 'bg-amber-100 text-amber-600',
                    },
                    {
                      icon: Calendar,
                      title: 'Accessibility',
                      color: 'bg-purple-100 text-purple-600',
                    },
                  ].map((item, index) => (
                    <div 
                      key={item.title}
                      className="glass p-6 rounded-x1 text-center card-hover animate-fade-in "
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`h-12 w-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <item.icon size={24} />
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gym Facility Info */}
        <section className="py-16 md:py-24 bg-gray-50 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Facilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: 'Cardio Zone',
                  image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
                  description: 'State-of-the-art treadmills, ellipticals, and rowing machines.',
                  specs: ['3 Treadmills', ' 2 Ellipticals', '1 Rowing Machines', '2 Exercise Bikes'],
                },
                {
                  title: 'Strength Training',
                  image: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                  description: 'Free weights and resistance machines for all levels.',
                  specs: ['Dumbbells up to 50kg', 'Olympic lifting platform', 'Power racks', 'Cable machines'],
                },
                {
                  title: 'Functional Area',
                  image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
                  description: 'Open space for bodyweight exercises and functional training.',
                  specs: ['TRX equipment', 'Battle ropes', 'Kettlebells', 'Yoga mats'],
                },
              ].map((facility, index) => (
                <div 
                  key={facility.title} 
                  className="glass rounded-xl overflow-hidden card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                    <p className="text-muted-foreground mb-4">{facility.description}</p>
                    <ul className="space-y-1">
                      {facility.specs.map((spec) => (
                        <li key={spec} className="text-sm flex items-center">
                          <span className="w-2 h-2 bg-gymBlue-500 rounded-full mr-2"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Opening Hours */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Opening Hours</h2>
              
              <div className="glass rounded-xl p-8 animate-fade-in">
                <div className="space-y-4">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM' },
                    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
                    { day: 'Holidays', hours: 'Varies (check calendar)' },
                  ].map((schedule) => (
                    <div key={schedule.day} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-gymBlue-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="font-semibold mb-2">Special Notes</h3>
                  <p className="text-sm text-muted-foreground">The gym may close early during university events or maintenance. Always check the calendar for the most up-to-date information.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
