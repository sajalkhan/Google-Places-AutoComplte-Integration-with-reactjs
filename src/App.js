import React, {useState} from 'react'
import GoogleMap from './components/GoogleMap';

function App() {

  const [state, setMapState] = useState({
    location: '',
    streetNumber: '',
    street: '',
    city: '',
    stateCode: '',
    zipCode: ''
  });

  const updateMapInfo = (state) => {
    setMapState({
      location: state.location,
      streetNumber: state.streetNumber,
      street: state.street,
      city: state.city,
      stateCode: state.stateCode,
      zipCode: state?.zipCode
    });
  }

  return (
    <div className="App">
      <h1>Google Maps App</h1>

      <GoogleMap
        title="Address Search *"
        name="address"
        state={updateMapInfo}/>

      <p>Street Code: {state.streetNumber}</p>
      <p>Street: {state.street}</p>
      <p>city: {state.city}</p>
      <p>state Code: {state.stateCode}</p>
      <p>zip Code: {state.zipCode}</p>
      
    </div>
  );
}

export default App;


// https://github.com/Gapur/google-place-autocomplete *

// https://medium.com/better-programming/the-best-practice-with-google-place-autocomplete-api-on-react-939211e8b4ce

// https://github.com/MeRahulAhire/react-places-autocomplete-Tutorial

// https://www.youtube.com/watch?v=h_d4HNwEleo&t=40s *