function SearchField({ handleSearch, handleClear, handleChange, searchQuery, searchInputRef, error }) {
  return (
    <div className='search'>
      <form noValidate onSubmit={handleSearch} className='search__form' autoComplete='off'>
        <input
          type='text'
          autoFocus
          autoComplete='nope'
          value={searchQuery}
          minLength='2'
          maxLength='50'
          onChange={handleChange}
          placeholder='Найдутся все гифки'
          className='search__field'
          ref={searchInputRef}
        />
        {searchQuery && (
          <button type='reset' onClick={handleClear} className='search__button search__button_clear'></button>
        )}
        <button type='submit' className='search__button search__button_search'></button>
      </form>
      {error && <span className='search__error'>{error}</span>}
    </div>
  );
}

export default SearchField;
