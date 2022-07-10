import React from 'react'


import {Box, Stack, Typography} from '@mui/material';
import  Logo from '../assets/images/Logo.png'



const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#d1cffa38">
      <Stack gap="40px" alignItems="center" px="40px"pt="25px" >
          <img src={Logo}alt="logo" width="170px" height="112px"/>
          <Typography variant="h5" pb="40px" mt='20px' >
            Made by Listat
          </Typography>
      </Stack>
    </Box>
  ) 
}

export default Footer