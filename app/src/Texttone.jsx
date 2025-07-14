// Texttone.jsx
import React, { useState } from "react";

const positiveWords = [
  "good", "happy", "great", "excellent", "awesome", "fantastic",
  "love", "nice", "wonderful", "amazing", "joy", "pleased"
];

const negativeWords = [
  "bad", "sad", "terrible", "horrible", "awful", "hate",
  "worst", "angry", "disgusting", "annoyed", "upset", "mad"
];

 function Texttone() {
  const [text, setText] = useState("");
  const [tone, setTone] = useState("");

  const detectTone = (input) => {
    const words = input.toLowerCase().split(/\s+/);
    let pos = 0, neg = 0;

    words.forEach((word) => {
      if (positiveWords.includes(word)) pos++;
      if (negativeWords.includes(word)) neg++;
    });

    if (pos > neg) return "Positive 😊";
    if (neg > pos) return "Negative 😞";
    if (text.trim() === "") return "";
    return "Neutral 😐";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    setTone(detectTone(value));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Text Tone Detector</h1>
        <textarea
          rows="6"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Type your text here..."
          value={text}
          onChange={handleChange}
        />
        {tone && (
          <div className="mt-4 text-lg font-medium text-center">
            Detected Tone: <span className="font-bold">{tone}</span>
          </div>
        )}
      </div>
    </div>
  );
}  export default  Texttone
