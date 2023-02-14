import './App.css';
import Dictionary from './Dictionary';


function App() {
  return (
    <div className="App">
      <div className="container">
      <header>
      <Dictionary defaultKeyword="book" />
      </header>
      <footer className="mt-5 mb-5">Coded by <a href="https://github.com/becauseidontlike" target="_blank" rel="noreferrer">WP</a>, <a href="https://github.com/becauseidontlike/dictionary" target="_blank" rel="noreferrer">open-sourced code</a></footer>
      </div>
    </div>
  );
}

export default App;
