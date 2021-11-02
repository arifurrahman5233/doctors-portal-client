import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../images/doctor.png';
import bg from '../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';



const appointmentBanner ={
    background: `url(${bg})`,
    backgroundColor: 'rgba(45.58,74 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 275
}

const AppointmentBanner = () => {
    return (
        <Box style= {appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
         <img style ={{width :400 , marginTop : '-110px'}} src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography variant= 'h6'>
                Appoinment
            </Typography>
            <Typography variant= 'h4'>
                Make an Appoinment Today
            </Typography>
          
            <Typography variant= 'h4'>
                Make an Appoinment Today
            </Typography>
            <Button variant ='contained'>
                LEARN MORE
            </Button>
          
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;