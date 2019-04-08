import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import { selectCity, updateMin, updateMax, setError } from '../actions/actions';
import "./CitiesView.css";


/* This key is only being stored here for the challenge's purpose,
*  but should be located on an environment variable for security reasons
*  if this was a real application
*/ 
const APIKey='225bf10e7c73f984f68ee68803ae5217';

const requestWeather = (city, dispatch, min, max) => (
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}&units=metric`)
    .then(res => {
      const weather = {
        weather: res.data.weather,
        main: res.data.main,
        name: res.data.name    
      };
      dispatch(selectCity(weather));

      if(!min) {
        dispatch(updateMin({
          temp: res.data.main.temp_min,
          local: res.data.name
        }));
      }
      else if(min.temp > res.data.main.temp_min) {
        dispatch(updateMin({
          temp: res.data.main.temp_min,
          local: res.data.name
        }));
      }

      if(!max) {
        dispatch(updateMax({
          temp: res.data.main.temp_max,
          local: res.data.name
        }));
      }
      else if(max.temp < res.data.main.temp_max) {
        dispatch(updateMax({
          temp: res.data.main.temp_max,
          local: res.data.name
        }));
      }
    })
    .catch(error => {
      dispatch(setError());
    })
);

const CitiesView = ({cities, dispatch, min, max}) => (
  <div className="cities-view">
    {cities.map((city) =>
      <Button 
        key={city}
        variant={'outlined'}
        onClick={() => requestWeather(city, dispatch, min, max)}>
          {city}
      </Button>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  min: state.min,
  max: state.max,
  cities: state.addedCities,
});


export default connect(mapStateToProps)(CitiesView);