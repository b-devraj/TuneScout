const Recommendations = ({ recommendations }) => (
    <div>
      <h2>Recommendations:</h2>
      <ul>
        {recommendations.map((song, index) => (
          <li key={index}>{song.name} by {song.artist}</li>
        ))}
      </ul>
    </div>
  );
  
  export default Recommendations;