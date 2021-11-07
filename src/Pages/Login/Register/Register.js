import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {



    const [loginData , setLoginData ] = useState({})

    const {registerUser} = useAuth();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
    
        if(loginData.password !== loginData.password2){
            alert('Your password did not match ');
            return
        }
        registerUser(loginData.email , loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
        <Grid container spacing={2}>
            <Grid item sx={{mt:30}} xs={12} md={6}>
            <Typography variant="body1" gutterBottom >Register</Typography>

            <form onSubmit={handleLoginSubmit}>
                <TextField
                 sx={{width: '75%', m:1}}
                 id="standard-basic"
                 label="Your Email"
                 name= "email"
                 type="email"
                 onChange={handleOnChange}
                 variant="standard" 
                 />
                <TextField
                 sx={{width: '75%', m:1}}
                 id="standard-basic" 
                 label="Your Password"
                 name="password"
                 onChange={handleOnChange}
                 type="password"
                 variant="standard"
                  
                 />
                <TextField
                 sx={{width: '75%', m:1}}
                 id="standard-basic" 
                 label="Retype Your Password"
                 name="password2"
                 onChange={handleOnChange}
                 type="password"
                 variant="standard"
                  
                 />
                    
                    <Button sx={{width: '75%', m:1}} type="submit" variant ="contained">
                        login
                    </Button>
                    <NavLink style={{textDecoration:"none"}} to ='/register'>
                    <Button variant="text">Already Registered ? Please Login</Button>
                    </NavLink>
                </form>

            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width:"100%"}}  src={login} alt=""/>
            </Grid>
            
            
        </Grid>
    </Container>
    );
};

export default Register;