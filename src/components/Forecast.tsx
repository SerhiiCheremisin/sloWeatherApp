import React, { useEffect, useState } from 'react'
import { Box, Typography, styled, Card } from '@mui/material';
import { ICityListItem } from '../utils/types';
import useCityList from '../services/hooks/useCityList';
import useCurrentCity from '../services/hooks/useCurrentCity';
import { getCelsius, getAverageDegrees } from '../services/functions';
//components
import Stats from './Stats';
import OtherDays from './OtherDays';

const ForecastWrapper = styled(Box)( () => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
}))

const Today = styled(Card)( ( {theme} ) => ({
    [theme.breakpoints.down("sm")]: {
        height: "150px"
     },
    [theme.breakpoints.down("lg")]: {
       width: "100%"
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    width: 700,
    height: 300,
    cursor: "pointer",
    backgroundColor: "#008AC9",
    transition: "all .5s ease",
    "&:hover" : {
     backgroundColor: "#7CB8EC"
    }
}))

const Forecast = ():JSX.Element => {

    const [currentForecast, setCurrentForecast] = useState<ICityListItem[]>([]);
    const [currentDate, setCurrentDate] = useState<ICityListItem>();
    const cityList = useCityList();
    const currentCity = useCurrentCity();

    const typographystyle = {
        fontSize: {
            xs: 18,
            sm: 30
        }
    }

    useEffect(() => {
       const currentList = cityList.filter( (item : ICityListItem) => item.location.toLocaleLowerCase() === currentCity.toLocaleLowerCase());
       setCurrentForecast(currentList);
       setCurrentDate(currentList[0]);
    }, [currentCity])

  return (
    <ForecastWrapper>
      <Box sx={{display:"flex", gap:5, flexDirection: {xs:"column", lg:"row"}, justifyContent: "space-between"}}>
        <Today>
          <Typography sx={typographystyle}>{`Forecast for : ${currentDate?.location}`}</Typography>
          <Typography sx={typographystyle}>{`Today is : ${new Date(currentDate?.time).toDateString()}`}</Typography>
          <Typography sx={typographystyle}>{`Outside is : ${getCelsius(currentDate?.temperature)}℃`}</Typography>
        </Today>
        <Stats setForecast={setCurrentForecast} currentForecast ={currentForecast}/>
      </Box>
      <OtherDays currentForecast ={currentForecast}/>
    </ForecastWrapper>
  )
}

export default Forecast;
