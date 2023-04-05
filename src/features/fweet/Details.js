import { status } from 'constants';
import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { setLoaderComponent } from 'utils/handler';
import { useDispatch, useSelector } from 'react-redux';
import FCardDetail from 'components/FCard/FCardDetails';
import { getTweetThunk } from 'features/dashboard/fweetSlice';

const { success } = status;

const Details = () => {
    const { id = null } = useParams();
    const dispatch = useDispatch();
    const { data: fweet = {} } = useSelector(state => state.fweet.fweets);
    const resStatus = useSelector(state => state.fweet.status);
    const [Loader, setLoader] = useState(null);

    useEffect(() => {
        if (id) dispatch(getTweetThunk(id));
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
                {Loader !== null && Loader}
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12}>
                                {
                                    (resStatus === success && fweet !== null) &&
                                    <FCardDetail key={fweet?.id} fweet={fweet} />
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Details;