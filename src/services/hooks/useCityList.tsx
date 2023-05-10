import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const  useCityList = () => {
  const cityList = useSelector( (state:RootState) => state.appStoorage.cityList);
  return cityList;
}

export default useCityList;
