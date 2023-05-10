import React from 'react'
import { ICityListItem, IOtherDayProps } from '../utils/types';
import { Box, Typography, styled, } from '@mui/material';
import { getCelsius } from '../services/functions';

const EverydayDisplay = styled(Box)( () => ({
    display: 'flex',
    gap: 20,
 }) )

const WeatherCard = styled(Box)( () => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginTop: 25,
    transition: "all .5s ease",
    "&:hover" : {
        color: "red"
    }
    
}))


const OtherDays = ( {currentForecast} : IOtherDayProps ):JSX.Element => {
  return (
    <EverydayDisplay>
        { currentForecast.slice(1,11).map( (day:ICityListItem, idx:number) => {
           return ( 
            <WeatherCard key = {idx}>
               <Typography sx={{fontSize: 20, textDecoration: "underline"}}>{`${new Date(day?.time).toDateString()}`}</Typography>
               <Typography sx={{fontSize: 40}}>{`${getCelsius(day?.temperature)}℃`}</Typography>
            </WeatherCard>
           )
        }) }
    </EverydayDisplay>
  )
}

export default OtherDays;
