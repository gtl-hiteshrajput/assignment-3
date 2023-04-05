// ==============================|| MAIN LAYOUT - HEADER ||============================== //

import { localStorageKey } from 'constants';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { getLocalStorageData } from 'utils/handler';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Avatar, Box, Grid, IconButton } from '@mui/material';

const { userData } = localStorageKey;

const Header = ({ handleDrawerToggle }) => {
    const navigate = useNavigate();
    const { name = null } = getLocalStorageData(userData);

    const handleLogoClick = () => {
        navigate('/dashboard');
    };

    return (
        <>
            <Grid
                container
                spacing={1}
                sx={{
                    borderBottom: '1px solid #e1e1e1',
                    backgroundColor: 'white',
                    zIndex: 999,
                    position: 'fixed'
                }}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            p: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                        <IconButton onClick={handleDrawerToggle}>
                            <MenuIcon
                                sx={{
                                    cursor: 'pointer',
                                    color: '#8A7F9C'
                                }}
                            />
                        </IconButton>
                        <Box
                            onClick={handleLogoClick}
                            sx={{
                                m: 'auto',
                                cursor: 'pointer'
                            }}>
                            <TwitterIcon sx={{ fontSize: '40px', color: 'blue' }} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '10px' }}>
                            <Avatar
                                src='https://picsum.photos/200/300'
                                sx={{
                                    mr: 2,
                                    backgroundColor: 'white',
                                    fontSize: '16px'
                                }}
                            />
                            <h4>{name}</h4>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default Header;
