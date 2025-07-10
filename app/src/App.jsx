import React, { useState } from 'react';

function App() {
  const [article, setArticle] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Improved summarization function
  const summarizeText = (text) => {
    // Basic cleaning
    const cleanedText = text.replace(/\s+/g, ' ').trim();
    
    // Split into sentences (naive approach - works for most cases)
    const sentences = cleanedText.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    if (sentences.length <= 2) {
      return cleanedText; // Return original if too short
    }
    
    // Determine how many sentences to include (20-30% of original)
    const targetCount = Math.max(2, Math.ceil(sentences.length * 0.25));
    
    // Select key sentences (here we just take first, middle, and last for demo)
    // In a real app, you might use more sophisticated algorithms
    const importantSentences = [
      sentences[0], 
      sentences[Math.floor(sentences.length/2)],
      sentences[sentences.length-1]
    ].filter(Boolean);
    
    // Join and format
    return importantSentences
      .map(s => s.trim() + (s.endsWith('.') ? '' : '.'))
      .join(' ');
  };

  const handleSummarize = async () => {
    if (!article.trim()) {
      setError('Please enter some text to summarize.');
      return;
    }

    setLoading(true);
    setError('');
    setSummary('');

    // Simulate API call delay
    setTimeout(() => {
      try {
        const result = summarizeText(article);
        setSummary(result || "Could not generate summary");
      } catch (err) {
        setError('Error generating summary');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
          AI Text Summarizer (Free)
        </h1>

        <textarea
          className="w-full h-48 p-4 text-lg border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 resize-none"
          placeholder="Paste your article, essay, or paragraph here..."
          value={article}
          onChange={(e) => setArticle(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white text-lg font-medium py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          onClick={handleSummarize}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : 'Summarize Text'}
        </button>

        {error && (
          <div className="mt-4 p-3 bg-red-50 rounded-lg text-red-600 text-center">
            {error}
          </div>
        )}

        {summary && (
          <div className="mt-8 animate-fade-in">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">📝 Summary:</h2>
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              {summary}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Summary generated from {article.split(' ').length} words to {summary.split(' ').length} words.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;