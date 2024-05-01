import {useState, useEffect} from 'react';
import './App.css';
import Meal from './Components/Meal';

const APIURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

function App() {
  const [mealsResults, setMealsResults] = useState([]);

  useEffect( ()=> {
    fetch(APIURL)
    .then( (resp) => resp.json() )
    .then( (data) => {
        console.log(data);
        setMealsResults(data.results);
      }
      )
  }
  ,[])

  return (
    <>
    {mealsResults.map( (element,index) => (<Meal key={index}/>)

    )}
    </>
  );
}

export default App;
