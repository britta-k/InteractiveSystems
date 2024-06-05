import { useState } from 'react';
import Movie from './Movie';

const APIKey = '5ec2952d363df877105dc30b46d6d0ef';

const SearchURL = 'https://api.themoviedb.org/3/search/movie?api_key=';

function Search(){
    const [movieResults, setMovieResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
      
        if(searchTerm)
        {
          fetch(SearchURL + APIKey + "&query=" + searchTerm)
          .then( (resp) => resp.json() )
          .then( (data) => {
            console.log(data.results);
            setMovieResults(data.results);
          })
        }
      
      }

      const handleOnChange = (e) => {
        console.log(e.target.value)
        setSearchTerm(e.target.value)
      }
      return (
        <>
    
        <form onSubmit={handleOnSubmit}>
      <input className='search' type="search" placeholder='Search...' value={searchTerm} onChange={handleOnChange}></input>
        </form>
        <div className = 'movie-container'>
    {movieResults.map( (element) => (<Movie key={element.id} {...element}/>)

    )}
        </div>

        </>

);
}

export default Search;