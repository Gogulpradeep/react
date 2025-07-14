import React from "react";

function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 overflow-hidden text-white font-sans">
      {/* Glowing stars background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-80 h-80 bg-purple-700 blur-[120px] top-[-60px] left-[-60px] opacity-40 animate-pulse"></div>
        <div className="absolute w-60 h-60 bg-indigo-500 blur-[100px] bottom-10 right-10 opacity-30 animate-ping"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6">
        <div className="flex items-center space-x-3">
          {/* Logo (can be replaced with SVG or image) */}
          <div className="text-3xl font-bold text-indigo-400">🧠</div>
          <span className="text-2xl font-bold tracking-wide">Neuroverse</span>
        </div>
        <nav className="space-x-6 text-gray-300 text-sm hidden sm:block">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#mission" className="hover:text-white">Our Mission</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-20 sm:pt-32">
        <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight text-white drop-shadow-xl">
          Welcome to <span className="text-indigo-400">Neuroverse</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl max-w-2xl text-gray-300 font-light">
          Where <span className="text-white font-semibold">intelligence</span> meets <span className="text-white font-semibold">infinite</span>. Unlock your full potential across the stars.
        </p>
        <button className="mt-10 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg transition duration-300">
          Explore the Galaxy
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 mt-32 px-6 sm:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">🚀 Features of Neuroverse</h2>
        <div className="grid gap-10 sm:grid-cols-3 text-center">
          <div className="bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-indigo-300">AI-Powered Learning</h3>
            <p className="mt-3 text-sm text-gray-300">Personalized pathways based on your curiosity and growth.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-indigo-300">Cognitive Tools</h3>
            <p className="mt-3 text-sm text-gray-300">Empower your brain with tools that think with you.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-indigo-300">Interstellar Community</h3>
            <p className="mt-3 text-sm text-gray-300">Learn and grow with minds from every galaxy.</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="relative z-10 mt-32 px-6 sm:px-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">🌌 Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          At <span className="text-indigo-400 font-semibold">Neuroverse</span>, we believe the human mind has no limits. 
          Our goal is to create a place where knowledge, creativity, and technology collide to unlock the cosmos of human potential.
        </p>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 mt-32 py-10 text-center text-sm text-gray-400">
        <p>© 2025 Neuroverse. All rights reserved.</p>
        <p>Made with 🌠 from Earth.</p>
      </footer>
    </div>
  );
}

export default HomePage;

