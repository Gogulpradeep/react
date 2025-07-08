import React, { useState } from 'react';

function App() {
  const [article, setArticle] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    if (!article.trim()) {
      setError('Please enter some text.');
      return;
    }

    setLoading(true);
    setError('');
    setSummary('');

    setTimeout(() => {
      const fakeSummary =
        "  Summary:\n" +
        article
          .split('. ')
          .slice(0, 2)
          .join('. ') + '...';
      setSummary(fakeSummary);
      setLoading(false);
    }, 1000);
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
          {loading ? 'Summarizing...' : 'Summarize Text'}
        </button>

        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        {summary && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">📝 Result:</h2>
            <div className="whitespace-pre-line bg-gray-100 p-4 rounded-md border border-gray-200 text-gray-700">
              {summary}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
