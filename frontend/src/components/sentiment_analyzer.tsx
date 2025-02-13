// src/components/SentimentAnalyzer.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/sentiment_analyzer.css';
import logo from '../assets/mimesis-logo.png';

const SentimentAnalyzer: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [result, setResult] = useState<{ label: string, score: number } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 2000); // Show content after intro animation
  }, []);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      // Send text as query parameter
      const response = await axios.post(
        `http://127.0.0.1:8000/analyze?text=${encodeURIComponent(text)}`
      );
      setResult(response.data);
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className={`intro-animation ${showContent ? 'fade-out' : ''}`}>
        <img src={logo} alt="Mimesis Logo" className="logo" />
        <h1>Welcome to Mimesis Sentiment Analysis Tool</h1>
      </div>

      <div className={`main-content ${showContent ? 'fade-in' : ''}`}>
        <div className="header">
          <h1>Sentiment Analysis Tool</h1>
          <p></p>
        </div>

        <div className="input-section">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text here"
            rows={5}
            className="text-input"
          />
          <button 
            onClick={handleAnalyze} 
            disabled={loading}
            className="analyze-button"
          >
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>

        <div className="results-section">
          {error && <div className="error-message">{error}</div>}
          
          {result && (
            <div className="result-container">
              <div className="sentiment-result">
                <h3>Sentiment: <span className={`sentiment-${result.label.toLowerCase()}`}>{result.label}</span></h3>
                <p>Confidence: <span className="confidence">{(result.score * 100).toFixed(2)}%</span></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalyzer;
