// React
import React, { useState } from 'react';

// Route dom
import { Route } from 'react-router-dom';

// Components
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { About } from '../components/About.jsx';

// Styles
import './App.css';
import Ciudad from '../components/Ciudad.jsx';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {

  const [cities, setCities] = useState([]);

  function onClose(id) {
    // if ( match.params.ciudadId === id) 
    setCities(oldCities => oldCities.filter(c => c.id !== id));

  }

  const celcius = kelvin => Math.round(kelvin - 273.15);

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: celcius(recurso.main.temp_min),
            max: celcius(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: celcius(recurso.main.temp),
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          if (onFilter(ciudad.id)) setCities(oldCities => [...oldCities.filter(x => x.id !== ciudad.id), ciudad]);
          else setCities(oldCities => [...oldCities, ciudad]);

        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <Route path='/'>
        <Nav onSearch={onSearch} />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route
        exact
        path='/ciudad/:ciudadId'
        render={({ match }) => <Ciudad
          city={onFilter(match.params.ciudadId)}
        />}
      />
      <Route exact path='/'>
          <Cards
            cities={cities}
            onClose={onClose}
          />
      </Route>
    </div>

  );
}

export default App;
