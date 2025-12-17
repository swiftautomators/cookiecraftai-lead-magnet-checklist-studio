import React from 'react';
import { PlayCircle, Star, ArrowRight } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  return (
    <div className="bg-cookie-50 min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Roadmap to Success Has Arrived in Your Inbox!
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            But before you dive in, let me ask you a question: <br />
            <span className="font-semibold text-cookie-700">What is the #1 thing that will determine your success?</span>
          </p>
        </div>

        {/* Video Embed Section */}
        <div className="bg-white p-4 rounded-2xl shadow-xl mb-12 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="aspect-video w-full bg-gray-900 rounded-xl relative group overflow-hidden cursor-pointer">
            {/* YouTube Iframe Placeholder - using a static image for visual appeal in this demo */}
            <img 
              src="https://picsum.photos/seed/bakingvideo/1200/675" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <PlayCircle className="w-10 h-10 text-cookie-600" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded text-white text-sm font-medium">
              2:45 • Watch Now
            </div>
          </div>
          <p className="mt-4 text-center text-gray-500 italic text-sm">
            Watch this short video from our founder, Sarah.
          </p>
        </div>

        {/* Upsell / Accelerator Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-cookie-200 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50 pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-wide mb-4">
                <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                Special Offer
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Fast-Track Your Launch with The Cookie Accelerator
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The checklist is great for starting, but the <strong>Cookie Accelerator</strong> is a 6-week intensive program designed to take you from "home baker" to "sold-out business owner" guaranteed. 
              </p>
              <ul className="space-y-2 mb-8 text-gray-700">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Weekly live coaching calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Done-for-you branding templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Wholesale pricing calculator access</span>
                </li>
              </ul>
              <button className="w-full md:w-auto bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2">
                <span>LEARN MORE ABOUT THE ACCELERATOR</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="w-full md:w-1/3">
              <div className="bg-cookie-100 rounded-2xl p-6 text-center transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="text-4xl font-serif font-bold text-cookie-800 mb-2">6</div>
                <div className="text-sm font-bold text-cookie-600 uppercase tracking-widest mb-4">Weeks</div>
                <div className="h-px bg-cookie-300 w-full mb-4"></div>
                <p className="text-cookie-900 font-medium mb-2">Next Cohort Starts:</p>
                <p className="text-2xl font-bold text-cookie-800">October 1st</p>
                <p className="text-xs text-cookie-600 mt-2">Limited spots available</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ThankYouPage;