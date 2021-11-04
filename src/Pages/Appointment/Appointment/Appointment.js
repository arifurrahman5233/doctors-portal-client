import React from 'react';
import Navigation from '../../Home/Shared/Navigation/Navigation';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AvailableAppoinments from './AvailalabeAppoinments/AvailableAppoinments';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date ={date}  setDate={setDate}></AppointmentHeader>
            <AvailableAppoinments date={date}></AvailableAppoinments>
            
        </div>
    );
};

export default Appointment;