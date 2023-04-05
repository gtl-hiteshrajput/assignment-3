import { useEffect } from 'react';
import { fetchUser } from './userSlice';
import { useParams } from 'react-router-dom';
import { Box, Card, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const Details = () => {
    const { id = null } = useParams();
    const dispatch = useDispatch();
    const { data: users = {} } = useSelector(state => state.user.users);
    const { email = null, name = null, username = null } = users;

    useEffect(() => {
        if (id) dispatch(fetchUser(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Box sx={{ p: 3 }}>
                <Grid container spacing={2} mt={0}>
                    <Grid item md={12}>
                        <Card sx={{ p: 3 }}>
                            <Box
                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', mb: 3 }}>
                            </Box>
                            <Grid container spacing={2}>
                                <Grid md={4} item mb={2}>
                                    <h3> {username}</h3>
                                </Grid>
                                <Grid md={4} item mb={2}>
                                    <h3> {name}</h3>
                                </Grid>
                                <Grid md={4} item mb={2}>
                                    {email}
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Details;