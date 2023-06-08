import { useState } from "react";
import { Input, InputButton, FilmForm } from "./searchForm.styled";


const SearchForm = ({ onSubmit, query }) => {
  const [value, setValue] = useState(query);

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <FilmForm onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={value}
        onChange={handleInputChange}
      />
      <InputButton type="submit">
        Search
      </InputButton>
    </FilmForm>
  );
};

export default SearchForm;