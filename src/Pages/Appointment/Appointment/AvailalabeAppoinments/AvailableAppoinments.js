import { Alert, Container, Grid, Typography } from '@mui/material';
import React, {useState} from 'react';
import Booking from '../../Booking';



const bookings =[
    {
        id: 1,
        name : 'Teeth orthodontics',
        time : '11.00 - 12.00',
        space :5,
    },
    {
        id: 2,
        name : 'Cosmetic Dentistry',
        time : '11.00 - 12.00',
        space :5,
    },
    {
        id: 3,
        name : 'Teeth Cleaning',
        time : '11.00 - 12.00',
        space :4,
    },
    {
        id: 4,
        name : 'Cavity Protection',
        time : '11.00 - 12.00',
        space :9,
    },
    {
        id: 5,
        name : 'Teeth Orthodontics',
        time : '11.00 - 12.00',
        space :10,
    },
    {
        id: 6,
        name : 'Teeth Orthodontics',
        time : '11.00 - 12.00',
        space :3,
    }
]



const AvailableAppoinments = ({date}) => {

    const [bookingSuccess , setBookingSuccess] = useState(false);
    return (
        <Container>
             <Typography variant="h4" sx={{ color: 'info.main',mb:2 }}>Available Appointment on {date.toDateString()}</Typography>
             {
                    bookingSuccess && <Alert severity="success">Appointment Booked Successfully</Alert>

                }
             <Grid container spacing={2}>
                {
                    bookings.map (booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess ={setBookingSuccess}
                    ></Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppoinments;