import './App.css';
import Dictionary from './Dictionary';


function App() {
  return (
    <div className="App">
      <div className="container">
      <header>
      <h1>DICTIONARY</h1>
      <Dictionary />
      </header>
      <footer className="mt-3">Coded by WP, <a href="https://github.com/becauseidontlike/dictionary" target="_blank" rel="noreferrer">open-sourced code</a></footer>
      </div>
    </div>
  );
}

export default App;
