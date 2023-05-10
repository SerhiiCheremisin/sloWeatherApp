import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const useIsCityChoosen = () => {
   const isCityChosen = useSelector( (state:RootState) => state.appStoorage.cityIsChosen);
   return isCityChosen;
}

export default useIsCityChoosen;
