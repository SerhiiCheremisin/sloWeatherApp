//components
import CitySelector from './components/CitySelector';
import Forecast from './components/Forecast';

import { useState, useEffect } from 'react'
import { getData } from './services/functions';
import { ICityListItem } from './utils/types';
import useCommonDispatch from './services/hooks/useCommonDispatch';
import { setCityList } from './redux/slices/appStoorage';
import CircularProgress from '@mui/material/CircularProgress';
import useIsCityChoosen from './services/hooks/useIsCityChoosen';

const App = ():JSX.Element => {
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [uniqueList, setUniqueList] = useState<{}>({});
  const dispatch = useCommonDispatch();
  const isCityChosen = useIsCityChoosen();
  
  useEffect(() => {
    getData("temperatureRecords").then(data => {
      const uniqueList = new Set();
      data.map( (item :ICityListItem)  => {
         if (uniqueList.has(item.location)) {
          return;
         } 
         uniqueList.add(item.location);
      })
      setUniqueList(uniqueList);
      dispatch(setCityList(data));
      setIsloading(false);
    })
  },[])
  
  if (isLoading) {
    return(
      <>
      <CircularProgress/>
      </>
    )
  } 
   return (
    <>
     <CitySelector list = {uniqueList}/>
     { isCityChosen && <Forecast/>} 
    </>

  )
}

export default App
