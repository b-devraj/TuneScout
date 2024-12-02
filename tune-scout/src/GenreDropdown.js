import Select from 'react-select';

const GenreDropdown = ({ setGenre }) => {
  const genres = [
    { value: 'pop', label: 'Pop' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    // Add more genres as needed
  ];

  return (
    <Select
      options={genres}
      onChange={(selectedOption) => setGenre(selectedOption.value)}
      placeholder="Select a genre"
    />
  );
};

export default GenreDropdown;