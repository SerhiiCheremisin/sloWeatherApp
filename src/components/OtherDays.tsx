import React from 'react'
import { ICityListItem, IOtherDayProps } from '../utils/types';
import { Box, Typography, styled} from '@mui/material';
import { getCelsius } from '../services/functions';


const EverydayDisplay = styled(Box)( ( {theme} ) => ({
    [theme.breakpoints.down(1076)]: {
     gap: "5px",
     padding: "0px"
    },
    display: 'flex',
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 20,
    marginTop: 30,
    padding: "5px",
    borderTop: "1px solid black",
 }) )

const WeatherCard = styled(Box)( ( {theme }) => ({
    [theme.breakpoints.down("lg")]: {
        height: "130px",
        width: "130px",
    },
    [theme.breakpoints.down("sm")]: {
        height: "100px",
        width: "100px",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: "white",
    marginTop: 25,
    height: "150px",
    width: "150px",
    borderRadius: "5%",
    transition: "all .5s ease",
    boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.23)",
    "&:hover" : {
        color: "red"
    }
}))

const OtherDays = ( {currentForecast} : IOtherDayProps ):JSX.Element => {
  return (
    <EverydayDisplay>
        { currentForecast.slice(1,8).map( (day:ICityListItem, idx:number) => {
           return ( 
            <WeatherCard key = {idx}>
               <Typography sx={{fontSize: {xs: 15,lg:20}, textDecoration: "underline", textAlign: "center"}}>{`${new Date(day?.time).toDateString()}`}</Typography>
               <Typography sx={{fontSize: { xs: 20, sm: 30,lg:40}}}>{`${getCelsius(day?.temperature)}℃`}</Typography>
            </WeatherCard>
           )
        }) }
    </EverydayDisplay>
  )
}

export default OtherDays;
