import React from 'react'

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const useCurrentCity = () =>  {
  const currentCity = useSelector( (state:RootState) => state.appStoorage.chosenCity);
  return currentCity;
}

export default useCurrentCity;
