import React, { useState } from "react";

const synonymMap = {
  quick: "fast",
  brown: "dark",
  fox: "animal",
  jumps: "leaps",
  lazy: "idle",
  dog: "canine",
  happy: "joyful",
  sad: "unhappy",
  good: "great"
};

const Paraphraser = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleParaphrase = () => {
    const words = inputText.split(" ");
    const paraphrasedWords = words.map((word) => {
      const cleanWord = word.toLowerCase().replace(/[.,!?]/g, "");
      const synonym = synonymMap[cleanWord];
      return synonym ? synonym : word;
    });
    setOutputText(paraphrasedWords.join(" "));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Paraphraser (Lite)</h1>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
          placeholder="Enter your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          onClick={handleParaphrase}
        >
          Paraphrase
        </button>
        <h2 className="text-lg font-semibold mt-4 mb-2">Output:</h2>
        <div className="p-3 bg-gray-100 border border-gray-300 rounded-md min-h-[80px]">
          {outputText}
        </div>
      </div>
    </div>
  );
};

export default Paraphraser;
