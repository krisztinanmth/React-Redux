import { useState, useEffect } from 'react';

export default () => {
  const [latitude, setLatitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLatitude(position.coords.latitude),
      error => setErrorMessage(error.message)
    );
    // empty array is given as second argument, because i only want to run this piece of code one time when the component renders
    // `componentDidMount`
  }, []);

  return [latitude, errorMessage];
};
