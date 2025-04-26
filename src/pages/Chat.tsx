
import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Send, User, Bot, ArrowDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Chat = () => {
  const { user } = useAuth();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi there! 👋 I\'m the UniGym Assistant. How can I help you today?',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messageContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  // Track scroll position to show/hide scroll-to-bottom button
  useEffect(() => {
    const container = messageContainerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollButton(!isNearBottom);
    };
    
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  
  const getRandomResponse = () => {
    const responses = [
      "You can book a gym slot by visiting the Calendar page and selecting your preferred time.",
      "Our gym is open Monday-Friday from 6 AM to 10 PM, and weekends from 8 AM to 8 PM.",
      "Yes, you need to register with your university email to book gym slots.",
      "We have a wide range of equipment including cardio machines, free weights, and functional training gear.",
      "If you need help with equipment, please ask one of our staff members at the gym.",
      "You can cancel your booking up to 2 hours before your scheduled time.",
      "The maximum booking duration is 2 hours per session.",
      "Yes, you can bring a guest for a small fee. Please check with reception.",
      "We sanitize all equipment regularly throughout the day for your safety.",
      "If the slot you want is full, you can join the waitlist and you'll be notified if a spot opens up.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: input,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        sender: 'bot',
        text: getRandomResponse(),
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  };
  
  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(date);
  };
  
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-28 pb-16">
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold mb-4 animate-fade-in">Chat Support</h1>
              <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in animation-delay-100">
                Have questions about the gym, equipment, or booking? Our virtual assistant is here to help.
              </p>
            </div>
            
            <div className="glass rounded-xl overflow-hidden h-[600px] flex flex-col animate-fade-in animation-delay-200">
              {/* Chat header */}
              <div className="p-4 border-b border-gray-100 bg-white/60 backdrop-blur-md">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gymBlue-100 flex items-center justify-center text-gymBlue-600 mr-3">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">UniGym Assistant</h3>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>
              </div>
              
              {/* Messages container */}
              <div 
                ref={messageContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-4"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user' 
                          ? 'bg-gymBlue-500 text-white rounded-tr-none' 
                          : 'bg-gray-100 text-foreground rounded-tl-none'
                      }`}
                    >
                      <div className="flex items-center mb-1">
                        <div 
                          className={`h-6 w-6 rounded-full flex items-center justify-center mr-2 text-xs ${
                            message.sender === 'user' 
                              ? 'bg-gymBlue-400 text-white' 
                              : 'bg-gray-200 text-gymBlue-600'
                          }`}
                        >
                          {message.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                        </div>
                        <span className="font-medium text-sm">
                          {message.sender === 'user' ? (user?.name || 'You') : 'UniGym Assistant'}
                        </span>
                        <span 
                          className={`text-xs ml-2 ${
                            message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                          }`}
                        >
                          {formatTime(message.timestamp)}
                        </span>
                      </div>
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none">
                      <div className="flex items-center space-x-2">
                        <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-gymBlue-600 text-xs">
                          <Bot size={14} />
                        </div>
                        <div className="flex space-x-1">
                          <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"></div>
                          <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Scroll to bottom button */}
              {showScrollButton && (
                <button
                  onClick={scrollToBottom}
                  className="absolute bottom-20 right-6 h-10 w-10 rounded-full bg-gymBlue-500 text-white flex items-center justify-center shadow-md hover:bg-gymBlue-600 transition-colors"
                >
                  <ArrowDown size={20} />
                </button>
              )}
              
              {/* Input container */}
              <div className="p-4 border-t border-gray-100 bg-white/60 backdrop-blur-md">
                <div className="flex items-end">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gymBlue-500 resize-none max-h-32"
                    rows={1}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!input.trim()}
                    className="ml-2 h-10 w-10 rounded-full bg-gymBlue-500 text-white flex items-center justify-center disabled:opacity-50 hover:bg-gymBlue-600 transition-colors"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Press Enter to send, Shift+Enter for a new line
                </p>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="mt-12 glass rounded-xl p-6 animate-fade-in animation-delay-300">
              <h2 className="text-2xl font-semibold mb-6"> Asked Questions</h2>
              
              <div className="space-y-4">
                {[
                  {
                    question: 'How do I book a gym slot?',
                    answer: 'You can book a gym slot by visiting the Calendar page, selecting your preferred date and time, and clicking "Book Slot".',
                  },
                  {
                    question: 'What are the gym opening hours?',
                    answer: 'Our gym is open Monday-Friday from 6 AM to 10 PM, and weekends from 8 AM to 8 PM. Holiday hours may vary.',
                  },
                  {
                    question: 'Can I cancel my booking?',
                    answer: 'Yes, you can cancel your booking up to 2 hours before your scheduled time without penalty.',
                  },
                  {
                    question: 'Is there a limit to how many slots I can book?',
                    answer: 'You can book up to 3 slots per week to ensure fair access for all students and staff.',
                  },
<<<<<<< HEAD
=======
                  
        
>>>>>>> 0b21aaf (update chatbot)
                  
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4">
                    <h3 className="font-medium mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Chat;
