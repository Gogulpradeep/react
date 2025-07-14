import React from "react";

const tools = [
  {
    title: "Text Summarizer",
    description: "Quickly summarize long articles or essays into concise points.",
    image: "/images/summarizer.jpg",
    route: "/summarizer",
  },
  {
    title: "Grammar Checker",
    description: "Check and fix grammar and punctuation mistakes instantly.",
    image: "/images/grammar.jpg",
    route: "/grammar",
  },
  {
    title: "Paraphraser",
    description: "Reword sentences to improve clarity and avoid plagiarism.",
    image: "/images/paraphraser.jpg",
    route: "/paraphraser",
  },
  {
    title: "Word Counter",
    description: "Count words, characters, and estimate reading time.",
    image: "/images/wordcount.jpg",
    route: "/wordcounter",
  },
  {
    title: "Read Time Estimator",
    description: "Live estimate how long it takes to read your text.",
    image: "/images/estimator.jpg",
    route: "/estimator",
  },
  {
    title: "Tone Detector",
    description: "Detect the tone of your text (e.g., formal, angry, excited).",
    image: "/images/tone.jpg",
    route: "/tone",
  },
];

function Homepage() {
  const navigate = (path) => {
    window.location.href = path;
  };

  return (
    <div className="bg-gradient-to-b from-[#0a0a23] to-[#1a1a40] text-white font-sans min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6 bg-black bg-opacity-30 backdrop-blur-md fixed w-full z-50">
        <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer" onClick={() => navigate("/")}>
          Neuroverse
        </h1>
        <div className="space-x-8 text-sm uppercase font-medium">
          <span onClick={() => navigate("/")} className="hover:text-cyan-300 cursor-pointer">Home</span>
          <span onClick={() => document.getElementById("tools")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-cyan-300 cursor-pointer">Tools</span>
          <span onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-cyan-300 cursor-pointer">About</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src="/space.jpg"
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
          <div className="bg-black bg-opacity-40 p-8 rounded-xl max-w-2xl">
            <h2 className="text-5xl font-bold mb-4 text-white">Welcome to Neuroverse</h2>
            <p className="text-lg text-gray-300">
              Your AI-powered toolkit for writing, summarizing, editing, and more — all in your browser.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6 text-cyan-300">About Neuroverse</h3>
        <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed text-lg">
          Neuroverse is a collection of smart tools designed to enhance productivity and creativity. Whether you're a student, content writer, or professional, our tools help you write better, faster, and with more confidence — all without needing an account or internet access.
        </p>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 px-8 bg-[#101020]">
        <h3 className="text-3xl font-semibold text-center mb-10 text-cyan-300">Explore Our Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              onClick={() => navigate(tool.route)}
              className="cursor-pointer group relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={tool.image}
                alt={tool.title}
                className="w-full h-48 object-cover brightness-75 group-hover:brightness-50"
              />
              <div className="absolute bottom-0 left-0 p-4">
                <h4 className="text-xl font-bold text-white">{tool.title}</h4>
                <p className="text-gray-300 text-sm">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-r from-cyan-800 to-indigo-800">
        <h3 className="text-3xl font-bold mb-4">Start Using Neuroverse</h3>
        <p className="mb-6 text-gray-200">No sign-up, no limits — just free, powerful tools at your fingertips.</p>
        <button
          onClick={() => document.getElementById("tools")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-xl text-lg transition"
        >
          Explore Tools
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-6 text-sm">
        <p>© 2025 Neuroverse. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <span className="hover:text-white cursor-pointer" onClick={() => alert("Privacy Policy coming soon")}>Privacy</span>
          <span className="hover:text-white cursor-pointer" onClick={() => alert("Terms coming soon")}>Terms</span>
          <span className="hover:text-white cursor-pointer" onClick={() => alert("Contact page coming soon")}>Contact</span>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
