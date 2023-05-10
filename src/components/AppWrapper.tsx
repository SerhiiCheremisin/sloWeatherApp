import React, { Children } from 'react'
import { Box, styled } from '@mui/material';
import { fontSize } from '@mui/system';


const WrapperBox = styled(Box)(( {theme} )  => ({
    [theme.breakpoints.down(600)]: {
      paddingTop: 50,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 150,
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(/mainBG.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}));

const  AppWrapper = ( { children } ):JSX.Element => {
  return (
    <WrapperBox>
      { children }
    </WrapperBox>
  )
}

export default AppWrapper;