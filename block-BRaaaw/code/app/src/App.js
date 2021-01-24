import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import data from './users.json';

function App() {
  return (
    <div className="App">
      <div className="all-cards">
        {data.map(val => <Card {...val}/>)}
        </div>
      </div>
  );
}

export default App;
