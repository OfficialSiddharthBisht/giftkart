import React from 'react'
import '../styles/searchInput.css';

const SearchInput =({value,onChangeText})=> {
    React.useEffect(()=>{
        let input = document.querySelector('input');
        input.addEventListener('input',onChangeText);
    },[]);
  return (
    <div className='search-container'>
        <input 
        type="text"
        value={value}
        onChange = {onChangeText}
        placeholder = "Search Products"
        />
        <button>🔎</button>
    </div>
  );
};

export default SearchInput