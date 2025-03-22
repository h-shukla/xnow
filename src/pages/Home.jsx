import React from 'react'

const Home = () => {
  return (
    <div>
       <HeroSection />
    </div>
  )
}

export default Home



import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
      {/* Small decorative bird icon */}
      <div className="absolute left-64 top-80 opacity-30">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12C6 8 9 5 13 5C17 5 20 8 20 12C20 16 17 19 13 19H6L8 17M6 12L8 14M6 12L8 10" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Main container */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side content */}
          <div className="w-full md:w-1/2 md:pr-8 space-y-6 mb-8 md:mb-0">
            {/* Logo and tagline */}
            <div className="flex items-center justify-start md:justify-start mb-2">
              <div className="bg-green-400 rounded-xl p-4 mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19C7.5 19 4 15.5 4 11C4 6.5 7.5 3 12 3C16.5 3 20 6.5 20 11C20 15.5 16.5 19 12 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 19V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 15L7 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 15L17 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600">Think vast,</span>
                <span className="text-gray-600">be happy</span>
              </div>
              <div className="ml-8 flex flex-col">
                <span className="text-gray-600">Be smart, It</span>
                <span className="text-gray-600">helps you</span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Unlock your<br />experience by<br />sassly
            </h1>
          </div>

          {/* Right side with phone mockup */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            {/* Phone mockup */}
            <div className="relative">
              <img 
                src="/api/placeholder/300/600" 
                alt="Phone mockup" 
                className="rounded-3xl shadow-xl"
              />
              
              {/* Notification popup */}
              <div className="absolute right-0 top-1/3 transform translate-x-1/2 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-400">
                    <path d="M12 19C7.5 19 4 15.5 4 11C4 6.5 7.5 3 12 3C16.5 3 20 6.5 20 11C20 15.5 16.5 19 12 19Z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <p className="text-sm text-center mt-2">
                    Booking ticket<br />
                    successfully<br />
                    done!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional content below */}
        <div className="mt-20 md:mt-32">
          <div className="md:max-w-lg mx-auto md:mx-0 mb-12">
            <p className="text-gray-600">
              Create tasks with various custom status to keep track of the progress
              on with us to uncover high-impactive app action way.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button className="bg-green-400 hover:bg-green-500 rounded-full px-8 py-6 text-white">
                Download Now
              </Button>
              <Button variant="link" className="text-gray-900 hover:text-gray-700">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Trusted by section */}
          <div className="mt-16">
            <p className="text-center text-gray-500 mb-8">Sassly software trusted by the great company</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {['Pilot', 'Next', 'Athlete Football', 'Aloha', 'Walmar'].map((company, index) => (
                <div key={index} className="opacity-30 grayscale">
                  <div className="h-8 w-20 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
