import React, { Component } from 'react';
import { connect } from 'react-redux';
import CitiesView from './components/CitiesView';
import AddCity from './components/AddCity';
import WeatherCard from './components/WeatherCard';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { addCity } from './actions/actions';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={ insertedCity: ''};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addCity = this.addCity.bind(this);
  }

  handleInputChange(e) {
    this.setState({insertedCity: e.target.value});
  }

  addCity() {
    if(this.state.insertedCity !== '' && !this.props.cities.find((city) => city === this.state.insertedCity)) {
      this.props.dispatch(addCity(this.state.insertedCity));
    }
    this.setState({insertedCity: ''});
  }

  render() {
    return (
      <div className="app">
        <AddCity handleInputChange={this.handleInputChange} addCity={this.addCity} value={this.state.insertedCity}/>
        <CitiesView/>
        <WeatherCard/>
        <Button variant="contained" disabled={!(this.props.min && this.props.max)} color="primary">
          <Link to="/minmax">Mostrar Min/Máx</Link>
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  min: state.min,
  max: state.max,
  cities: state.addedCities
});

export default connect(mapStateToProps)(App);
