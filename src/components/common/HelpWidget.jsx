import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCommentAlt, FaTimes, FaUser, FaRegPaperPlane } from 'react-icons/fa';

const HelpWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'mia',
      text: "Hi! 👋 I'm Mia, your learning advisor at Xebia. Are you exploring training for yourself, or looking to upskill an engineering team?",
      time: 'Just now'
    }
  ]);
  const [options, setOptions] = useState([
    { text: 'I want to train my team 🏢', type: 'team' },
    { text: 'How do sandbox labs work? 💻', type: 'labs' },
    { text: 'Are there certifications? 🏆', type: 'certs' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleOptionClick = (option) => {
    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: option.text,
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setOptions([]);
    setIsTyping(true);

    // Simulate Mia typing response
    setTimeout(() => {
      setIsTyping(false);
      let replyText = '';
      let nextOpts = [];

      switch (option.type) {
        case 'team':
          replyText = "Fantastic! We support enterprise plans that include custom training paths, Single Sign-On (SSO), analytics dashboards, and private mentoring sessions with our senior consultants. I recommend filling out our Contact Form to schedule a quick demo with our architects!";
          nextOpts = [
            { text: 'View Contact Page ✉', type: 'go_contact' },
            { text: 'Back to main options ↩', type: 'main' }
          ];
          break;
        case 'labs':
          replyText = "Our sandbox labs launch real, isolated cloud instances (AWS, GCP) and Kubernetes namespaces on-demand. There's zero terminal setup needed—everything is fully pre-configured and runs in a browser-embedded shell. All resource billing is covered by us!";
          nextOpts = [
            { text: 'Are there time limits? ⏰', type: 'limits' },
            { text: 'Back to main options ↩', type: 'main' }
          ];
          break;
        case 'certs':
          replyText = "Yes! All learning tracks align with official certifications like AWS Solutions Architect, CNCF Kubernetes Administrator (CKA), or Scrum Alliance roles. You receive a verified digital completion certificate for your profile.";
          nextOpts = [
            { text: 'Are the certificates free? 💸', type: 'certs_free' },
            { text: 'Back to main options ↩', type: 'main' }
          ];
          break;
        case 'limits':
          replyText = "Each sandbox lab session has a generous timer (usually 1.5 to 3 hours depending on the difficulty) to prevent cloud resource leakage. You can always restart the lab if you run out of time!";
          nextOpts = [
            { text: 'Back to main options ↩', type: 'main' }
          ];
          break;
        case 'certs_free':
          replyText = "Absolutely. All verified certificates of completion are included for free in your path enrollment. There are no surprise fees or download costs.";
          nextOpts = [
            { text: 'Back to main options ↩', type: 'main' }
          ];
          break;
        case 'go_contact':
          replyText = "You can contact our consulting team directly by clicking the Contact link in the top menu or going to /contact. We typically respond within one business day!";
          nextOpts = [
            { text: 'Back to main options ↩', type: 'main' }
          ];
          break;
        case 'main':
        default:
          replyText = "Sure! What else can I help you with today?";
          nextOpts = [
            { text: 'I want to train my team 🏢', type: 'team' },
            { text: 'How do sandbox labs work? 💻', type: 'labs' },
            { text: 'Are there certifications? 🏆', type: 'certs' }
          ];
          break;
      }

      const miaMsg = {
        id: Date.now() + 1,
        sender: 'mia',
        text: replyText,
        time: 'Just now'
      };

      setMessages((prev) => [...prev, miaMsg]);
      setOptions(nextOpts);
    }, 900);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-poppins select-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 260 }}
            className="w-80 sm:w-96 h-[500px] bg-white border border-purple-100 rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-4"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-700 to-purple-600 p-5 flex items-center justify-between text-white">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold text-lg border border-white/10 relative">
                  M
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-purple-700" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-none mb-1">Mia</h3>
                  <p className="text-[10px] text-purple-200 font-medium">Learning Advisor (Online)</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-grow p-5 overflow-y-auto bg-gray-50 flex flex-col gap-4">
              {messages.map((msg) => {
                const isMia = msg.sender === 'mia';
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 max-w-[85%] ${isMia ? 'self-start' : 'self-end flex-row-reverse'}`}
                  >
                    {isMia && (
                      <div className="w-7 h-7 rounded-lg bg-purple-100 border border-purple-200 text-purple-700 flex items-center justify-center text-xs font-bold mt-0.5 shrink-0">
                        M
                      </div>
                    )}
                    <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      isMia
                        ? 'bg-white text-gray-700 rounded-tl-none border border-purple-100/50 shadow-sm'
                        : 'bg-primary-600 text-white rounded-tr-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-start gap-2.5 max-w-[85%] self-start">
                  <div className="w-7 h-7 rounded-lg bg-purple-100 border border-purple-200 text-purple-700 flex items-center justify-center text-xs font-bold mt-0.5 shrink-0">
                    M
                  </div>
                  <div className="p-4 bg-white text-gray-400 rounded-2xl rounded-tl-none border border-purple-100/50 shadow-sm flex gap-1.5 items-center">
                    <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick replies footer */}
            <div className="p-4 border-t border-purple-100 bg-white flex flex-col gap-2 shrink-0">
              {options.length > 0 && (
                <div className="flex flex-col gap-2 mb-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Select an option:</p>
                  <div className="flex flex-wrap gap-2">
                    {options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(opt)}
                        className="px-3.5 py-2 border border-purple-100 hover:border-purple-300 bg-purple-50/40 hover:bg-purple-50 text-xs font-semibold text-primary-700 rounded-xl transition-all text-left"
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Fake message input */}
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3.5 py-2.5 bg-gray-50/50">
                <input
                  type="text"
                  disabled
                  placeholder="Select a reply option above..."
                  className="flex-grow bg-transparent text-xs text-gray-400 focus:outline-none cursor-not-allowed"
                />
                <button disabled className="text-gray-300 cursor-not-allowed" aria-label="Send">
                  <FaRegPaperPlane className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 text-white flex items-center justify-center shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all focus:outline-none"
        aria-label="Toggle chat widget"
      >
        {isOpen ? <FaTimes className="w-5 h-5" /> : <FaCommentAlt className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default HelpWidget;
