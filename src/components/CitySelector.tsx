import React, { useState, useEffect } from 'react'
import { ICitySelectorProps } from '../utils/types';
// redux
import useCommonDispatch from '../services/hooks/useCommonDispatch';
import { setChosenCity, setCityIsChosen } from '../redux/slices/appStoorage';
// material ui
import { Box, styled, useTheme } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import useIsCityChoosen from '../services/hooks/useIsCityChoosen';

const BoxSelector = styled(Box)(({theme} ) => ({
  width: "100%",
  display: "flex",
  justifyContent:"center",
})) 

const CitySelector = ( {list}:ICitySelectorProps ):JSX.Element => {
      const dispatch = useCommonDispatch();
      const cityIsChosen = useIsCityChoosen();
      const theme = useTheme(); 
      const [city,setCity] = useState('City');

    const handleChange = (event: SelectChangeEvent):void => {
        setCity(event.target.value);
      };

      const choserButtonHandler = ():void => {
       if (!cityIsChosen) {
        dispatch(setCityIsChosen(true));
       }
        dispatch(setChosenCity(city));    
       }

     const submitButtonStyle = city === "City" ? "disabled" : "contained";


   return (
    <BoxSelector>
     <FormControl sx={{ [theme.breakpoints.down(1000)]: {
                        flexDirection: 'column',
                        }, 
                        flexDirection: "row", gap: 5}}>
     <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
         sx={{
           width: {xs:"100%", md: 500},
           }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="City"
          value={city}
          onChange={handleChange}
        >
           { [...list].map( (el: string, idx: number) => {
             return <MenuItem key={idx} value={el}>{el}</MenuItem>
           }) } 
        </Select>
        <Button sx={{fontSize: {xs: "15px" ,sm: "0.875rem"}}} onClick={choserButtonHandler} variant={submitButtonStyle}>Watch the broadcast</Button>
     </FormControl>
    </BoxSelector>
  )
}

export default CitySelector;
