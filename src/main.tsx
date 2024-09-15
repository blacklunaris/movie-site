import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Carousel from './components/Carousel';
import MovieCard from './components/MovieCard';
import Root from './routes/Root';
import { Button } from 'react-bootstrap';
import MovieInfo from './components/MovieInfo';

function App() {
  return (
    <Router>
      <nav className="text-white" style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/movies" style={{ padding: 5 }}>
          Movies
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Root />} />
        <Route
          path="/movies"
          element={
            <Link to="/movieinfo">
              <MovieCard
                MovieName={''}
                Season={''}
                Episode={''}
                EpisodeTitle={''}
              />
            </Link>
          }
        />
        <Route path="/movieinfo" element={<MovieInfo />} />
      </Routes>
    </Router>
  );
}
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found');
}
export default App;
