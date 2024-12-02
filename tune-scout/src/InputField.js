const InputField = ({ setSongUrl }) => (
    <input
      type="text"
      placeholder="Enter Spotify song link"
      onChange={(e) => setSongUrl(e.target.value)}
    />
  );
  
  export default InputField;