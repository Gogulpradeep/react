import React, { useState } from 'react';

 function Readtime() {
  const [text, setText] = useState('');

  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const wordsPerMinute = 200;
  const readingTime = wordCount / wordsPerMinute;
  const minutes = Math.floor(readingTime);
  const seconds = Math.round((readingTime - minutes) * 60);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Reading Time Estimator</h1>
      <textarea
        className="w-full p-4 border rounded-lg h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="text-gray-700">
        <p><span className="font-semibold">Word Count:</span> {wordCount}</p>
        <p><span className="font-semibold">Estimated Reading Time:</span> {minutes} min {seconds} sec</p>
      </div>
    </div>
  );
} export default  Readtime
