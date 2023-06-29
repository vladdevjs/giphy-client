function SearchField({ handleSearch, handleClear, handleChange, searchQuery }) {
  return (
    <div className='search'>
      <form onSubmit={handleSearch} className='search__form'>
        <input type='text' autoFocus autoComplete='off' value={searchQuery} onChange={handleChange} placeholder='Найдутся все гифки' className='search__field' />
        <button type='reset' onClick={handleClear} className='search__button search__button_clear'></button>
        <button type='submit' className='search__button search__button_search'></button>
      </form>
    </div>
  );
}

export default SearchField;
