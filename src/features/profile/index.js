import MDButton from 'components/MDButton';
import { localStorageKey } from 'constants';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import MDTypography from 'components/MDTypography';
import { getLocalStorageData } from 'utils/handler';
import { ToastContainer, toast } from 'react-toastify';
import { Box, Card, Grid, TextField } from '@mui/material';

const { userData } = localStorageKey;

const intialProfile = {
    id: '',
    name: '',
    email: '',
    username: ''
};

const Profile = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState(intialProfile);

    useEffect(() => {
        setProfile((getProfileFromLocalStorage))
    }, []);

    const getProfileFromLocalStorage = () => {
        return getLocalStorageData(userData);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleEditClick = () => {
        navigate('/dashboard');
    };

    const handleSubmit = () => {
        toast.success('Login successful');
        navigate('/dashboard');
    };

    return (
        <Box sx={{ p: 3 }}>
            <ToastContainer />
            <div>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <MDTypography variant='h5' gutterBottom component='div' sx={{ fontWeight: 500 }} text='My Profile' />
                    <Box>
                        <MDButton variant='text' type='submit' sx={{ mr: 2, "&:hover": { backgroundColor: "#FFFFFF" } }} size='large' text='Cancel' onClick={handleEditClick} />
                        <MDButton variant='contained' type='submit' sx={{ mr: 2, backgroundColor: '#3E54AC', "&:hover": { backgroundColor: "#3E54AC" } }} size='large' onClick={handleSubmit} text='Save' />
                    </Box>
                </Box>

                <Grid container spacing={2} mt={0}>
                    <Grid item md={5}>
                        <Card sx={{ p: 3 }}>
                            <Box
                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', mb: 3 }}>
                            </Box>
                            <Grid container spacing={2}>
                                <Grid md={6} item mb={2}>
                                    <TextField
                                        id='outlined-basic'
                                        label='FirstName'
                                        type='text'
                                        variant='outlined'
                                        sx={{ width: 1 }}
                                        name='firstName'
                                        value={profile.name}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid md={6} item mb={2}>
                                    <TextField
                                        id='outlined-basic'
                                        label='UserName'
                                        type='text'
                                        variant='outlined'
                                        sx={{ width: 1 }}
                                        name='username'
                                        value={profile.username}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid md={12} item mb={2}>
                                    <TextField
                                        id='outlined-basic'
                                        disabled='true'
                                        label='Email'
                                        type='text'
                                        variant='outlined'
                                        sx={{ width: 1 }}
                                        name='email'
                                        value={profile.email}
                                    />
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
};

export default Profile;