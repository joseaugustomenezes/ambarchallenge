const initialState = {
  addedCities: [],
  selectedCity: undefined,
  min: undefined,
  max: undefined,
  error: false
};

const weatherApp = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CITY':
      return {
        ...state,
        error: false,
        selectedCity: action.selectedCity
      }
    case 'UPDATE_MIN':
      return {
        ...state,
        min: action.min
      }
    case 'UPDATE_MAX':
      return {
        ...state,
        max: action.max
      }
    case 'ADD_CITY':
      return {
        ...state,
        addedCities: state.addedCities.concat(action.city)
      }
    case 'SET_ERROR': 
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
}

export default weatherApp;