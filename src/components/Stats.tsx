import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAverageDegrees, getMostCommonTemperature, getAboveAverageDays, hotAndColdDaysCounter, checkDates} from '../services/functions';
import { IStatsProps } from '../utils/types';
import { Box, FormControl, MenuItem, InputLabel, Button, useTheme } from '@mui/material';
import { ICityListItem } from '../utils/types';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Modals from './Modals';
import { modalErrors } from '../utils/types';

const Stats = ( {currentForecast} : IStatsProps ):JSX.Element => {
 
const [localRangedDates, setLocalRangedDates] = useState<ICityListItem[]>([]);
const [isModalOpen, setIsModalOpen] = useState<boolean>(false); 
const [modalError, setModalError] = useState<modalErrors>("empty");   
const [dateFrom, setDateFrom] = useState<string>("");
const [dateTo, setdateTo] = useState<string>("");

const theme = useTheme();

useEffect( () => {
    setLocalRangedDates(currentForecast);
    setDateFrom("");
    setdateTo("");
}, [currentForecast])

const typographyStyles = {
    fontSize: {
        xs:15,
        sm: 20,
        lg:30
    }}
const labelstyles = {
    fontSize: {
        xs: "18px",
        sm: "1rem",
        
    }
}
const handleChangeFrom = (event: SelectChangeEvent) => {
    setDateFrom(event.target.value);
  };

  const handleChangeTo = (event: SelectChangeEvent) => {
    setdateTo(event.target.value);
  };

const submitDatesRange = () => {
     if (dateFrom === "" || dateTo === "") {
        setIsModalOpen(true);
        setModalError("empty");
     }
      const check:boolean = checkDates(dateFrom, dateTo);
      if (!check) {
        setIsModalOpen(true);
        setModalError("dates");
      }
     const timeArray = currentForecast.map( (el: ICityListItem) => el.time);
     const firstIndex = timeArray.indexOf(Date.parse(dateFrom));
     const secondIndex = timeArray.indexOf(Date.parse(dateTo));
     const rengedForecast = currentForecast.slice(firstIndex,secondIndex+1);
     setLocalRangedDates(rengedForecast);
  };
return (
    <Box sx={{padding: {xs: "0 10px", sm: "0px"}}}>
        { isModalOpen && <Modals error={modalError} closeFunction = {setIsModalOpen}/> }
        <Typography sx={{fontSize: {xs: 20, lg: 30}}}>{`You can change dates for statistic`}</Typography>
        <Box sx={{display: "flex", gap:"10px", marginTop: {xs: 2, xl: 5}, [theme.breakpoints.down(1600)]: {flexDirection: "column"}}}>
          <Box>
          <FormControl sx={{width: 300, [theme.breakpoints.down(1600)]: {width: "100%"}}}>
            <InputLabel sx={labelstyles} id="demo-simple-select-label">Date from</InputLabel>
            <Select
            sx={labelstyles}
            value={new Date(dateFrom).toDateString()}
            label="Date from"
            onChange={handleChangeFrom}
           >
           { currentForecast.map( (el:ICityListItem, idx:number) => {
            return <MenuItem value={new Date(el.time).toDateString()} key={idx}>{new Date(el.time).toDateString()}</MenuItem>
           })}
        </Select>
      </FormControl>
          </Box>
          <Box>
          <FormControl sx={{width: 300, [theme.breakpoints.down(1600)]: {width: "100%"}}}>
            <InputLabel sx={labelstyles} id="demo-simple-select-label">Date to</InputLabel>
            <Select
            sx={labelstyles}
            value={new Date(dateTo).toDateString()}
            label="Date to"
            onChange={handleChangeTo}
           >
          { currentForecast.map( (el:ICityListItem, idx:number) => {
            return <MenuItem value={new Date(el.time).toDateString()} key={idx}>{new Date(el.time).toDateString()}</MenuItem>
           })}
        </Select>
      </FormControl>
          </Box> 
          <Button onClick={submitDatesRange} sx={{width: 200, [theme.breakpoints.down(1600)]: {width: "100%"}, [theme.breakpoints.down(600)]: {fontSize: "18px"}}} variant="outlined">Show</Button>
        </Box>
        <Box sx={{ display:"flex", flexDirection: "column", gap: {xs: "5px", sm: "0px"}}}>
        <Typography sx={typographyStyles}>{`The statistic for period of: ${localRangedDates.length} days `}</Typography>
        <Typography sx={typographyStyles}>{`The average temperature is: ${getAverageDegrees(localRangedDates)} ℃`}</Typography>
        <Typography sx={typographyStyles}>{`The most common temperature is: ${getMostCommonTemperature(localRangedDates)} ℃`}</Typography>
        <Typography sx={typographyStyles}>{`Number of days with temperature above the average: ${getAboveAverageDays(localRangedDates)} days`}</Typography>
        <Typography sx={typographyStyles}>{`Number of hot days (above 15℃): ${hotAndColdDaysCounter(localRangedDates, "hot")} days`}</Typography>
        <Typography sx={typographyStyles}>{`Number of cold days (below 5℃): ${hotAndColdDaysCounter(localRangedDates, "cold")} days`}</Typography>
        </Box>

    </Box>
  )
}

export default Stats;
