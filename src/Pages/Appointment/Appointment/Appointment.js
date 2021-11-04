import React from 'react';
import Navigation from '../../Home/Shared/Navigation/Navigation';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AvailableAppoinments from './AvailalabeAppoinments/AvailableAppoinments';

const Appointment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader></AppointmentHeader>
            <AvailableAppoinments></AvailableAppoinments>
            
        </div>
    );
};

export default Appointment;