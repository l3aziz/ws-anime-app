import React,{useState} from 'react';
import './App.css'; 
import { data } from './data';
import MovieList from './components/MovieList';
import NavMain from './components/NavMain';
function App() {
  const [search, setSearch] = useState("")
  const [rating, setRating] = useState(0)
  const [movie, setMovie] = useState(data);
  return (
    <div className="App">
      <NavMain setRating={setRating} setSearch={setSearch} />
      <MovieList
        setMovie={setMovie}
        rating={rating}
        data={movie}
        search={search}
      />
    </div>
  );
} 

export default App;
