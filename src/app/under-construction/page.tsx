import React from "react";

export const metadata = {
  title: "Under Construction - SocialMoon",
  description: "We're working on something amazing. Contact us for inquiries.",
};

export default function UnderConstructionPage() {

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-yellow-400">
      {/* Animated Background Elements */}
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-construction {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; }
        }
        
        @keyframes float-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }
        
        .animate-slide-up { animation: slideInUp 0.8s ease-out forwards; }
        .animate-slide-down { animation: slideInDown 0.8s ease-out forwards; }
        .pulse-construction { animation: pulse-construction 3s ease-in-out infinite; }
        .float-element { animation: float-up 6s ease-in-out infinite; }
        
        .diagonal-stripes {
          background: repeating-linear-gradient(
            45deg,
            #000,
            #000 10px,
            #FFD700 10px,
            #FFD700 20px
          );
        }
      `}</style>

      {/* Top Construction Stripes */}
      <div className="diagonal-stripes h-12 w-full"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-[calc(100vh-96px)] flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-4xl text-center space-y-12">
          {/* Animated Construction Icon */}
          <div className="animate-slide-up pulse-construction">
            <div className="text-8xl md:text-9xl">🔨</div>
          </div>

          {/* Main Heading */}
          <div className="animate-slide-down space-y-4">
            <h1 className="text-6xl md:text-8xl font-black text-black leading-tight tracking-tighter">
              WORK IN
              <br />
              PROGRESS
            </h1>
            
            <div className="h-1 w-24 bg-black mx-auto"></div>
          </div>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl font-bold text-black animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Something Amazing is Coming Soon
          </p>

          <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto font-medium animate-slide-up" style={{ animationDelay: "0.4s" }}>
            SocialMoon is under construction. We're building next-generation social media marketing solutions just for you.
          </p>

          {/* Contact Information */}
          <div className="animate-slide-up space-y-8" style={{ animationDelay: "0.6s" }}>
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                  📞 GET IN TOUCH 📧
                </h2>
                <div className="h-2 w-32 bg-black mx-auto"></div>
              </div>

              {/* Large Yellow Banner with Contact Options */}
              <div className="bg-black border-4 border-yellow-400 rounded-3xl overflow-hidden">
                <div className="bg-yellow-400 px-8 py-4 text-center border-b-4 border-black">
                  <p className="text-black font-black text-xl">REACH OUT TO US</p>
                </div>
                
                <div className="p-8 space-y-4">
                  {/* Email Option */}
                  <a
                    href="mailto:contact@socialmoon.in"
                    className="block w-full bg-yellow-400 hover:bg-black text-black hover:text-yellow-400 border-4 border-yellow-400 hover:border-yellow-400 font-black py-6 px-6 rounded-2xl transition-all duration-300 text-center text-xl hover:scale-105"
                  >
                    📧 contact@socialmoon.in
                  </a>

                  {/* Divider */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-1 bg-yellow-400"></div>
                    <span className="text-yellow-400 font-black">OR</span>
                    <div className="flex-1 h-1 bg-yellow-400"></div>
                  </div>

                  {/* Phone Option */}
                  <a
                    href="tel:+919118439107"
                    className="block w-full bg-yellow-400 hover:bg-black text-black hover:text-yellow-400 border-4 border-yellow-400 hover:border-yellow-400 font-black py-6 px-6 rounded-2xl transition-all duration-300 text-center text-xl hover:scale-105"
                  >
                    ☎️ +91 9118439107
                  </a>
                </div>
              </div>

              <p className="text-center text-black font-bold text-lg">
                💬 We'll respond to you ASAP!
              </p>
            </div>
          </div>

          {/* Animated Dots */}
          <div className="flex justify-center gap-3 animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <div className="w-3 h-3 bg-black rounded-full pulse-construction"></div>
            <div className="w-3 h-3 bg-black rounded-full pulse-construction" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-3 h-3 bg-black rounded-full pulse-construction" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>

      {/* Bottom Construction Stripes */}
      <div className="diagonal-stripes h-12 w-full"></div>
    </div>
  );
}
