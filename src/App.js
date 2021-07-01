import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [planet, setPlanet] = useState({});
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

  const getPlanet = (planet) => {
    setPlanet(planet);
  };

  return (
    <div className="App">
      <Router>
        <Navbar planets={planets} />
        <Switch>
          <Route
            path="/planets/:planet"
            children={({ match, ...rest }) => (
              <Main
                match={match}
                planet={planet}
                getPlanet={getPlanet}
                {...rest}
              />
            )}
          >
            {/* <Main planet="neptune" /> */}
          </Route>
          {/* <Route path="/">
            <Main planet="mercury" />
          </Route> */}
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
