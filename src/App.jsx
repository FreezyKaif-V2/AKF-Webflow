import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">AK Furniture</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-gray-700">Sofas</a>
              <a href="#" className="hover:text-gray-700">Help</a>
            </div>
          </div>
        </div>
      </nav>

      <header className="relative">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Design your dream sofa</h1>
          <p className="text-xl mb-8">From plush recliners to tech-savvy smart beds, we make your sofa dreams a reality.</p>
          <div className="space-x-4">
            <button className="bg-black text-white px-8 py-3 rounded-lg">Discover</button>
            <button className="border border-black px-8 py-3 rounded-lg">Create</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;