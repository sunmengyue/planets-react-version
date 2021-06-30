import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const planets = [
    'mercury',
    'venus',
    'earth',
    'mars',
    'jupiter',
    'saturn',
    'uranus',
    'neptune',
  ];

  return (
    <div className="App">
      <Router>
        <Navbar planets={planets} />
        <Switch>
          <Route path="/:planet">
            <Main planet="mercury" />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
