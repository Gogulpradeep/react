import React, { useState } from "react";

function Grammar() {
  const [text, setText] = useState("");
  const [correctedText, setCorrectedText] = useState("");
  const [stats, setStats] = useState({
    corrections: 0,
    wordCount: 0,
    characterCount: 0
  });

  const checkGrammar = () => {
    let corrections = 0;
    let result = text;

    // 1. Capitalize 'i' when it's a standalone word
    result = result.replace(/\bi\b/g, (match) => {
      corrections += match === 'i' ? 1 : 0;
      return 'I';
    });

    // 2. Capitalize first letter after sentence terminators
    result = result.replace(/([.!?]\s+)([a-z])/g, (match, p1, p2) => {
      corrections += 1;
      return p1 + p2.toUpperCase();
    });

    // 3. Remove extra spaces
    result = result.replace(/\s+/g, ' ').trim();

    // 4. Capitalize first letter of the text
    if (result.length > 0 && result[0] !== result[0].toUpperCase()) {
      corrections += 1;
      result = result.charAt(0).toUpperCase() + result.slice(1);
    }

    // 5. Add space after commas if missing
    result = result.replace(/,(\S)/g, ', $1');

    // Calculate stats
    const wordCount = result.trim() === '' ? 0 : result.trim().split(/\s+/).length;
    const characterCount = result.length;

    setCorrectedText(result);
    setStats({
      corrections,
      wordCount,
      characterCount
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">🧠 Neuroverse</h1>
        <p className="text-lg text-gray-300 mt-2">
          AI-powered grammar correction — all in your browser
        </p>
      </header>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Grammar Checker Card */}
        <div className="bg-white/5 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Grammar Checker</h2>
          <textarea
            className="w-full h-48 p-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
            placeholder="Paste your text here for grammar checking..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button
            onClick={checkGrammar}
            className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md w-full transition-colors"
          >
            Check Grammar
          </button>

          {correctedText && (
            <div className="mt-6">
              <div className="flex gap-4 mb-4 text-sm">
                <div className="bg-indigo-900/50 px-3 py-1 rounded-full">
                  {stats.corrections} corrections
                </div>
                <div className="bg-purple-900/50 px-3 py-1 rounded-full">
                  {stats.wordCount} words
                </div>
                <div className="bg-blue-900/50 px-3 py-1 rounded-full">
                  {stats.characterCount} chars
                </div>
              </div>
              <div className="p-4 bg-white/10 rounded-md">
                <h3 className="font-semibold mb-2">Corrected Text:</h3>
                <p className="text-white/90 whitespace-pre-wrap">{correctedText}</p>
              </div>
            </div>
          )}
        </div>

        {/* Instructions Card */}
        <div className="bg-white/5 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">•</span>
              Corrects lowercase 'i' to 'I'
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">•</span>
              Capitalizes sentences after punctuation
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">•</span>
              Fixes missing spaces after commas
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">•</span>
              Removes extra spaces between words
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">•</span>
              Capitalizes the first letter of your text
            </li>
          </ul>
          <div className="mt-6 pt-4 border-t border-white/10">
            <h3 className="font-medium mb-2">Limitations</h3>
            <p className="text-sm text-gray-400">
              This is a basic grammar checker that runs entirely in your browser. 
              For advanced grammar checking, consider using professional tools.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Neuroverse | Made with ❤️
      </footer>
    </div>
  );
} export default Grammar