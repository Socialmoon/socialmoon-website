'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setShowTooltip(true);
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Avena Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Chat with Avena"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Sparkles className="w-6 h-6" />
          )}
        </button>

        {/* Online pulse indicator */}
        {!isOpen && (
          <>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white animate-ping pointer-events-none"></span>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white pointer-events-none"></span>
          </>
        )}

        {/* Tooltip shown on load */}
        {!isOpen && showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-2xl shadow-2xl whitespace-nowrap pointer-events-none">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
              Hi! I&apos;m Avena — ask me anything ✨
            </div>
            <div className="absolute top-full right-5 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-purple-600"></div>
          </div>
        )}

        {/* Hover tooltip */}
        {!isOpen && !showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
              Chat with Avena AI ✨
            </div>
            <div className="absolute top-full right-5 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-purple-600"></div>
          </div>
        )}
      </div>

      {/* Avena Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-2 sm:bottom-24 sm:right-6 w-[calc(100vw-1rem)] sm:w-[420px] max-w-[420px] h-[620px] bg-white rounded-2xl shadow-2xl border border-gray-200/80 z-40 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3.5 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-purple-700"></span>
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">Avena</div>
                <div className="text-xs text-white/75 leading-tight">AI Assistant · SocialMoon</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <a
                href="https://avena.socialmoon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-xs px-2.5 py-1.5 rounded-lg hover:bg-white/15 transition-colors font-medium"
                title="Open full page"
              >
                Open ↗
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Avena iframe */}
          <iframe
            src="https://avena.socialmoon.in"
            className="flex-1 w-full border-none"
            title="Avena AI Assistant"
            loading="lazy"
          />
        </div>
      )}
    </>
  );
};

export default Chatbot;