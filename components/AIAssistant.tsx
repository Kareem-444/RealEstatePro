"use client";
import { useState, useRef, useEffect } from "react";
import { 
  Bot, 
  Send, 
  Minimize2, 
  Maximize2, 
  X, 
  User, 
  Loader2,
  MessageSquare,
  RefreshCw,
  Settings,
  Volume2,
  VolumeX
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  isTyping?: boolean;
}

interface AIAssistantProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  primaryColor?: string;
  assistantName?: string;
  welcomeMessage?: string;
  placeholder?: string;
}

export default function AIAssistant({
  position = 'bottom-right',
  primaryColor = 'emerald',
  assistantName = 'RealEstate AI',
  welcomeMessage = 'Hi! I\'m your AI assistant. How can I help you find your dream property today?',
  placeholder = 'Ask me anything about real estate...'
}: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Position classes
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  // Color variants
  const colorClasses = {
    emerald: {
      primary: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-300',
      text: 'text-emerald-600',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    blue: {
      primary: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300',
      text: 'text-blue-600',
      gradient: 'from-blue-500 to-blue-600'
    },
    purple: {
      primary: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-300',
      text: 'text-purple-600',
      gradient: 'from-purple-500 to-purple-600'
    }
  };

  const colors = colorClasses[primaryColor as keyof typeof colorClasses] || colorClasses.emerald;

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: '1',
        text: welcomeMessage,
        isBot: true,
        timestamp: new Date()
      }]);
    }
  }, [welcomeMessage]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  // Simulate AI response
  const simulateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    // Simple response logic - in a real app, this would be an API call
    const responses = {
      greeting: [
        "Hello! I'm here to help you with all your real estate needs.",
        "Hi there! Ready to find your perfect property?",
        "Welcome! How can I assist you with real estate today?"
      ],
      buying: [
        "I'd be happy to help you find properties to buy! What's your budget and preferred location?",
        "Great! Are you looking for a specific type of property? Houses, condos, or commercial?",
        "Let's find you the perfect home! What are your must-have features?"
      ],
      selling: [
        "I can help you sell your property! Do you need a market analysis first?",
        "Selling can be exciting! What type of property are you looking to sell?",
        "Let's get your property sold quickly and for the best price! Tell me about it."
      ],
      default: [
        "That's a great question! Let me help you with that.",
        "I understand. Here's what I recommend based on current market trends...",
        "Thanks for asking! Based on my knowledge of real estate, I suggest...",
        "Interesting question! In the current market, I would say..."
      ]
    };

    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    } else if (message.includes('buy') || message.includes('purchase')) {
      return responses.buying[Math.floor(Math.random() * responses.buying.length)];
    } else if (message.includes('sell') || message.includes('selling')) {
      return responses.selling[Math.floor(Math.random() * responses.selling.length)];
    } else {
      return responses.default[Math.floor(Math.random() * responses.default.length)];
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      const response = await simulateAIResponse(userMessage.text);
      
      setIsTyping(false);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      
      if (!isOpen || isMinimized) {
        setHasNewMessage(true);
      }
      
      // Play notification sound
      if (soundEnabled) {
        // You could add actual sound here
        console.log('🔔 New message sound');
      }
    } catch (error) {
      setIsTyping(false);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble responding right now. Please try again.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([{
      id: '1',
      text: welcomeMessage,
      isBot: true,
      timestamp: new Date()
    }]);
  };

  const openChat = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setHasNewMessage(false);
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating Button */}
  <div className={`fixed ${positionClasses[position]} z-50`}>
        <div className="relative">
          {/* New message indicator */}
          {hasNewMessage && !isOpen && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          )}
          
          <button
            aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
            onClick={isOpen ? closeChat : openChat}
            className={`${colors.primary} text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center transition-all duration-300 border-4 border-white/80 focus:outline-none focus:ring-4 ${colors.primary.includes('focus:ring-') ? '' : 'focus:ring-opacity-50'} hover:scale-105 active:scale-95`}
          >
            {isOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Bot className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed ${positionClasses[position]} z-40 mb-20`}>
          <div className={`bg-white dark:bg-slate-900 rounded-2xl shadow-2xl transition-all duration-300 ${
            isMinimized ? 'w-80 h-16' : 'w-96 h-[32rem]'
          } max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)] overflow-hidden border border-gray-200 dark:border-gray-700`}>
            
            {/* Header */}
            <div className={`bg-gradient-to-r ${colors.gradient} text-white p-4 flex items-center justify-between rounded-t-2xl`}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{assistantName}</h3>
                  {isTyping && (
                    <p className="text-xs text-white/80 flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      Typing...
                    </p>
                  )}
                  {!isTyping && (
                    <p className="text-xs text-white/80">Online</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                  title={soundEnabled ? "Disable sound" : "Enable sound"}
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
                
                <button
                  onClick={clearChat}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                  title="Clear chat"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                  title={isMinimized ? "Maximize" : "Minimize"}
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div 
                  ref={chatContainerRef}
                  className="flex-1 overflow-y-auto p-4 space-y-4 h-80 bg-gray-50 dark:bg-slate-800"
                >
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      {message.isBot && (
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${colors.text} bg-white dark:bg-slate-700 border-2 border-current`}>
                          <Bot className="w-4 h-4" />
                        </div>
                      )}
                      
                      <div className={`max-w-[75%] ${message.isBot ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`p-3 rounded-2xl text-sm ${
                            message.isBot
                              ? 'bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-200 shadow-sm'
                              : `bg-gradient-to-r ${colors.gradient} text-white`
                          }`}
                        >
                          {message.text}
                        </div>
                        <div className={`text-xs text-gray-500 dark:text-gray-400 mt-1 ${
                          message.isBot ? 'text-left' : 'text-right'
                        }`}>
                          {formatTime(message.timestamp)}
                        </div>
                      </div>

                      {!message.isBot && (
                        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex gap-3 justify-start">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${colors.text} bg-white dark:bg-slate-700 border-2 border-current`}>
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-white dark:bg-slate-700 p-3 rounded-2xl shadow-sm">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={placeholder}
                      disabled={isLoading}
                      className="flex-1 px-4 py-3 bg-gray-100 dark:bg-slate-800 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 dark:focus:ring-offset-slate-900 placeholder-gray-500 dark:placeholder-gray-400 disabled:opacity-50"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputText.trim() || isLoading}
                      className={`px-4 py-3 ${colors.primary} text-white rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 ${colors.primary.includes('focus:ring-') ? '' : 'focus:ring-emerald-500'} dark:focus:ring-offset-slate-900`}
                    >
                      {isLoading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>
  );
}