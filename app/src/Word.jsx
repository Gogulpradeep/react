import React, { useState } from "react";
 function Word() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const sentenceCount = (text.match(/[^\.!\?]+[\.!\?]+/g) || []).length;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Word Counter</h1>
        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={handleChange}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-center">
          <div className="bg-blue-100 p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Words</h2>
            <p className="text-2xl font-bold">{wordCount}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Characters</h2>
            <p className="text-2xl font-bold">{charCount}</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Sentences</h2>
            <p className="text-2xl font-bold">{sentenceCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Word
