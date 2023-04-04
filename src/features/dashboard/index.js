import { status } from 'constants';
import Add from 'features/fweet/Add';
import FCard from 'components/FCard/FCard';
import { useEffect, useState } from 'react';
import { getTweetsThunk } from './fweetSlice';
import { Box, Grid } from '@mui/material/index';
import { setLoaderComponent } from 'utils/handler';
import { useDispatch, useSelector } from 'react-redux';

const { success } = status;

const Dashboard = () => {
    const dispatch = useDispatch();
    const { data: fweets = [] } = useSelector(state => state.fweet.fweets);
    const resStatus = useSelector(state => state.fweet.status);
    const [Loader, setLoader] = useState(null);

    useEffect(() => {
        dispatch(getTweetsThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (resStatus) {
            setLoader(setLoaderComponent(resStatus));
        }
    }, [resStatus]);

    return (
        <>
            <Box>
                <Grid container spacing={1}>
                    <Add isDashboard={true} />
                    <hr
                        style={{
                            backgroundColor: 'black',
                            height: 5,
                            width: '100%',
                        }}
                    />
                    <Grid item xs={12}>
                        {Loader !== null && Loader}
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12}>
                                {
                                    (resStatus === success && fweets?.length > 0) &&
                                    fweets.map((fweet) => (
                                        <FCard key={fweet?.id} fweet={fweet} />
                                    ))
                                }
                                {
                                    resStatus === success && fweets?.length === 0 && ('No data found')
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Dashboard;