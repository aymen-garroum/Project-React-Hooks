import './App.css';
import MovieList from './Components/MovieList/MovieList.js'
import Filter from './Components/Filter/Filter'
import {movies} from './Data'
import {useState} from 'react';

function App() {

  const [Movie,SetMovie] = useState(movies);
  const [titre, SetTitre] = useState("");
  const [rating, SetRating] = useState(1);

  const add_movie = (new_movie) => {SetMovie([...Movie, new_movie])}

  let filter_tab = [];
  let val_titre = titre.toLowerCase().trim();

  if(val_titre !== "")
  {filter_tab = Movie.filter(el => (el.title.toLowerCase().includes(val_titre)) && (el.rating == rating))} else {filter_tab=Movie}
  

  return (
    <div className="App">
      <Filter val_titre={SetTitre} val_rating={SetRating} set_list={add_movie} state_rating={rating}/>
      <MovieList {...filter_tab}/>
    </div>
  );
}

export default App;
