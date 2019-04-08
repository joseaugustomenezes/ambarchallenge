import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import './WeatherCard.css';

const WeatherCard = ({ selectedCity, error }) => (
  <div>{error ? 
    <Card className="weather-card">
      <Typography component="h5" variant="h5">
        Error: city not found!
      </Typography>
    </Card>
    : selectedCity &&
  <Card className="weather-card">
    <div>
      <CardContent>
        <Typography component="h5" variant="h5">
          {selectedCity.name}
        </Typography>
        <Typography variant="subtitle1" color="textPrimary">
          Temp: {selectedCity.main.temp} °C
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Min: {selectedCity.main.temp_min} °C
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Máx: {selectedCity.main.temp_max} °C
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Humidity: {selectedCity.main.humidity}%
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Pressure: {selectedCity.main.pressure} hPa
        </Typography>
      </CardContent>
    </div>
    <div>
      <img
        src={`http://openweathermap.org/img/w/${selectedCity.weather[0].icon}.png`}
        alt={selectedCity.weather[0].main}
      />
    </div>
  </Card>
  }
  </div>
);
const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
  error: state.error
});

export default connect(mapStateToProps)(WeatherCard);