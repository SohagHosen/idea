import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Navigation from './navigation/Navigation';
import TopWriters from './top-writers/TopWriters';


function App() {
  return (
    <Router>
      <Navigation/>
      <TopWriters/>
    </Router>
  );
}

export default App;
