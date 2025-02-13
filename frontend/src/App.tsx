// src/App.tsx
import React from 'react';
import SentimentAnalyzer from './components/sentiment_analyzer';

const App: React.FC = () => {
  return (
    <div className="App">
      <SentimentAnalyzer />
    </div>
  );
}

export default App;
