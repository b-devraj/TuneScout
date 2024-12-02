import React, { useState } from 'react';
import './App.css';
import InputField from './InputField';
import GenreDropdown from './GenreDropdown';
import Recommendations from './Recommendations';

const App = () => {
  const [songUrl, setSongUrl] = useState('');
  const [genre, setGenre] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="container">
      <h1 className="title">TuneScout</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Enter Spotify song link"
          value={songUrl}
          onChange={(e) => setSongUrl(e.target.value)}
          className="input"
        />
        <select
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
          className="select"
        >
          <option value="">Select Genre</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="jazz">Jazz</option>
        </select>
        <button className="button">
          Submit
        </button>
      </div>
      <ul className="recommendations">
        {recommendations.map((rec, index) => (
          <li key={index} className="list-item">
            {rec.name} by {rec.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
