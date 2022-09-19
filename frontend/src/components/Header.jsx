import React from 'react'
import ListItem from './ListItem'
import SearchInput from './SearchInput'
import {fetchSearchResults} from '../utils'

function Header() {
  const [query,setQuery] = React.useState("");
  const [results,setResults] = React.useState([]);

  const fetchData = async() =>{
    const res = await (fetchSearchResults(query));
    console.log(res);
    setResults(res);
  };

  React.useEffect(()=>{
    fetchData();
  },[query])

  return(
    <div>
      <SearchInput
      value={query}
      onChangeText = {e =>{
        setQuery(e.target.value);
      }} />
      {
        results.map((result,index)=>{
          <div key={index}>
            <ListItem 
              title = {result.title}
              imageUrl = {result.image_url}
              // caption = {result.tagline}
            />
          </div>
        })
      }
    </div>
  )
}

export default Header