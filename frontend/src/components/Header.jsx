import React from 'react'
import ListItem from './ListItem'
import SearchInput from './SearchInput'
import {fetchSearchResults} from '../utils'
import debounce from 'lodash.debounce';
import '../styles/header.css';

function Header() {
  const [query,setQuery] = React.useState("");
  const [results,setResults] = React.useState([]);

  const fetchData = async(query, cb) =>{
    const res = await (fetchSearchResults(query));
    // console.log("respi",res);
    cb(res);
  };

  const debounceFetchData = debounce((query,cb)=>{
    fetchData(query,cb);
  },3000);

  
  React.useEffect(()=>{
    debounceFetchData(query,res=>{
      if(res.products){
        setResults(res.products);
      }
    });
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
          console.log(result.title,result.image,result.description);
          <div key={index}>
            <ListItem 
              title = {result.title}
              image = {result.image}
              description = {result.description}
            />
          </div>
        })
    }
    </div>
  )
}

export default Header