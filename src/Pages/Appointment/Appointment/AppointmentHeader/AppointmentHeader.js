import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../../images/chair.png';
import Calender from '../../../Home/Shared/Calender/Calender';

const AppointmentHeader = ({date , setDate}) => {
   
    return (
        <Container >
            <Grid container spacing ={-5}>
            <Grid xs={12} md = {6} style={{my:5}}>
                    <Calender date ={date} setDate={setDate}></Calender>
            </Grid>

            <Grid xs={12} md = {6}>
                    <img style={{width:'100%'}} src={chair} alt="" />
            </Grid>
            </Grid>

            
        </Container>
    );
};

export default AppointmentHeader;