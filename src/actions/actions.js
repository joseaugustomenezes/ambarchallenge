export const selectCity = (selectedCity) => (
  {type: 'SELECT_CITY', selectedCity}
);

export const updateMin = (min) => (
  {type: 'UPDATE_MIN', min}
);

export const updateMax = (max) => (
  {type: 'UPDATE_MAX', max}
);

export const addCity = (city) => (
  {type: 'ADD_CITY', city}
);

export const setError = () => (
  {type: 'SET_ERROR'}
);