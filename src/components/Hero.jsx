import React from 'react';

function Hero() {
  return (
    <header className="section utility-padding-all-0 utility-text-on-overlay">
      <div className="grid-layout">
        <div className="relative min-h-screen">
          <img 
            width="1267" 
            height="773" 
            alt="Comfortable and cozy sofa with tea table" 
            src="/images/1c3a98c1-ce96-487f-9175-b3e207eda22a.avif" 
            loading="lazy" 
            className="cover-image absolute inset-0 w-full h-full object-cover"
          />
          <div className="overlay absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid-layout desktop-3-column">
            <div className="flex flex-col gap-4 pb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white">Design your dream sofa</h1>
              <p className="text-xl text-white opacity-90 max-w-2xl">
                From plush recliners to tech-savvy smart beds, we make your sofa dreams a reality.
              </p>
              <div className="flex gap-4">
                <a href="#" className="px-8 py-3 bg-white text-black rounded-lg hover:bg-opacity-90">
                  Discover
                </a>
                <a 
                  href="https://wa.me/917809817833" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-black"
                >
                  Create
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;