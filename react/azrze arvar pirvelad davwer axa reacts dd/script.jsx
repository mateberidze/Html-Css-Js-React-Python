// App.js
import React from 'react';
import 'App.css';

function App() {
  // Dummy movie data
  const movies = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: 'Schindler\'s List', year: 1993 }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Cinema!</h1>
      </header>
      <main>
        <h2>Movies Now Playing</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              <strong>{movie.title}</strong> ({movie.year})
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <p>Enjoy the Show!</p>
      </footer>
    </div>
  );
}

export default App;
