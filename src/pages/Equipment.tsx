
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Info } from 'lucide-react';

const Equipment = () => {
  const equipmentCategories = [
    {
      category: 'Cardio Equipment',
      items: [
        {
          name: 'Treadmills',
          image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
          count: 3,
          description: 'Modern treadmills with incline options, heart rate monitors, and pre-programmed workouts.',
        },
        {
          name: 'Elliptical Trainers',
          image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          count: 3,
          description: 'Low-impact elliptical machines with adjustable resistance levels.',
        },
        {
          name: 'Stationary Bikes',
          image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
          count: 4,
          description: 'Upright and recumbent bikes with digital displays and various resistance settings.',
        },
        {
          name: 'Rowing Machines',
          image: 'image/rowmachine.jpg',
          count: 1,
          description: 'Concept2 rowing machines for full-body cardiovascular workouts.',
        },
      ],
    },
    {
      category: 'Strength Training',
      items: [
        {
          name: 'Free Weights',
          image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          count: 'Various',
          description: 'Dumbbells (2-50kg), barbells, weight plates, and kettlebells.',
        },
        {
          name: 'Power Racks',
          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          count: 1,
          description: 'Adjustable power racks for squats, bench press, and other compound movements.',
        },
        {
          name: 'Cable Machines',
          image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
          count: 2,
          description: 'Versatile cable systems for a wide range of exercises and muscle groups.',
        },
        {
          name: 'Smith Machines',
          image: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          count: 1,
          description: 'Guided barbell machines with safety features for various exercises.',
        },
      ],
    },
    {
      category: 'Functional Training',
      items: [
        {
          name: 'TRX Suspension',
          image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
          count: 8,
          description: 'Suspension trainers for bodyweight resistance exercises.',
        },
        
        {
          name: 'Battle Ropes',
          image: 'https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          count: 4,
          description: 'Heavy ropes for high-intensity interval training.',
        },
        {
          name: 'Medicine Balls',
          image: 'https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          count: 12,
          description: 'Weighted balls in various sizes for explosive exercises and core training.',
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-28">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Gym Equipment</h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in animation-delay-100">
                Explore our state-of-the-art fitness equipment available at UniGym.
              </p>
            </div>
            
            <div className="bg-gymBlue-50 border border-gymBlue-100 rounded-lg p-4 flex items-start max-w-3xl mx-auto mt-8 animate-fade-in animation-delay-200">
              <Info size={20} className="text-gymBlue-500 mt-1 mr-3 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Our equipment is regularly maintained and sanitized for your safety. If you notice any issues with a piece of equipment, please report it to the gym staff immediately.
              </p>
            </div>
          </div>
        </section>
        
        {/* Equipment Categories */}
        {equipmentCategories.map((category, categoryIndex) => (
          <section key={category.category} className="py-12 md:py-20 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-12 animate-fade-in">{category.category}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={item.name} 
                    className="glass rounded-xl overflow-hidden flex flex-col animate-fade-in"
                    style={{ animationDelay: `${(categoryIndex * 100) + (itemIndex * 50)}ms` }}
                  >
                    <div className="relative h-52">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-full">
                        {typeof item.count === 'number' ? `${item.count} units` : item.count}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-muted-foreground text-sm flex-1">{item.description}</p>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-sm font-medium">Availability</span>
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                          Available
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
        
        {/* Equipment Usage Guidelines */}
        <section className="py-12 md:py-20 bg-gray-50 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Equipment Usage Guidelines</h2>
            
            <div className="max-w-3xl mx-auto glass rounded-xl p-8 animate-fade-in">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">General Rules</h3>
                  <ul className="space-y-2">
                    {[
                      'Wipe down equipment after use with the provided sanitizing wipes.',
                      'Return weights and accessories to their designated areas.',
                      'Allow others to work in during rest periods for popular equipment.',
                      'Wear appropriate gym attire and closed-toe athletic shoes.',
                      'Do not monopolize machines during peak hours.',
                    ].map((rule, index) => (
                      <li key={index} className="flex items-start">
                        <span className="h-5 w-5 bg-gymBlue-100 text-gymBlue-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Safety Guidelines</h3>
                  <ul className="space-y-2">
                    {[
                      'Always warm up before using heavy weights or intense cardio.',
                      'Use spotters for heavy lifting exercises like bench press and squats.',
                      'Start with lighter weights if you\'re unfamiliar with a machine.',
                      'Report any equipment malfunctions to staff immediately.',
                      'Respect personal space and maintain a safe distance from others.',
                    ].map((guideline, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gymBlue-500 mr-3">•</span>
                        <span className="text-muted-foreground">{guideline}</span>
                      </li>
                    ))}
                  </ul>
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

export default Equipment;
