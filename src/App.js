import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenrePage from "./pages/GenrePage";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import MyList from './pages/MyList';
import SearchResults from "./pages/SearchResults";
import MovieDetails from "./pages/MovieDetails";


function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvshows" element={<TVShows />} />
            <Route path="/mylist" element={<MyList />} />
            <Route path="/genre/:name" element={<GenrePage />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/movie/:id" element={<MovieDetails />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
