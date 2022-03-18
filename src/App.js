//import logo from './logo.svg';
import './App.css';
import Car from './common/components/Car/Car';
import Truck from './common/components/Truck/Truck';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReacJS Web App 2022</h1>
        <br /><br />
        <Car />
        <br /><br />
        <Truck />
      </header>
    </div>
  );
}

export default App;
