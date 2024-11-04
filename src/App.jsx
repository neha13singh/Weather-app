import './App.css';
import Weather from './components/weather';
import Planner from './components/planner/Index';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="weather-section">
          <Weather />
        </div>
        <div className="planner-section">
          <Planner />
        </div>
      </div>
    </div>
  );
}

export default App;