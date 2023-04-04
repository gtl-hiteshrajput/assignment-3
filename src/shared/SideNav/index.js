import './SideNav.css';
import { drawerWidth } from 'config';
import { sideMenuItems } from 'menu-items';
import MDButton from 'components/MDButton';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { clearLocalStorageData } from 'utils/handler';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Drawer as MuiDrawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';

const openedMixin = () => ({
    width: drawerWidth,
    overflowX: 'hidden'
});

const closedMixin = (theme) => ({
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(),
        '& .MuiDrawer-paper': openedMixin()
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
    })
}));


const SideNav = ({ open = false }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;
    const splitLocation = pathname.split('/');

    const handleAddFweet = () => {
        navigate('/fweet/add');
    };

    const handleLogout = () => {
        clearLocalStorageData();
        navigate('/login');
    };

    return (
        <>
            <Drawer variant='permanent' open={open} className='Sidebar'>
                <List className='sidebar-list'>
                    {sideMenuItems?.length > 0 && sideMenuItems.map((item) => {
                        const { id, path, toPath = '', pathLabel = '', pathIcon = {} } = item;
                        return (
                            <div key={id}>
                                <ListItem
                                    className={splitLocation[1] === path ? 'SidebarActiveLink' : ''}>
                                    <Link
                                        to={toPath}
                                        style={{
                                            color: 'white',
                                            textDecoration: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: '100%'
                                        }}>
                                        <ListItemIcon sx={{ color: 'white', minWidth: '50px' }}>{pathIcon}</ListItemIcon>
                                        <ListItemText>{pathLabel}</ListItemText>
                                    </Link>
                                </ListItem>
                            </div>
                        );
                    })}
                    <ListItem sx={{ cursor: 'pointer' }} onClick={handleLogout}>
                        <ListItemIcon sx={{ color: 'white', minWidth: '50px' }}><LogoutIcon /></ListItemIcon>
                        <ListItemText>Logout</ListItemText>
                    </ListItem>
                    {
                        !open ?
                            <IconButton onClick={handleAddFweet} sx={{ paddingLeft: 2 }}>
                                <AddIcon
                                    sx={{
                                        cursor: 'pointer',
                                        color: '#FFFFFF'
                                    }}
                                />
                            </IconButton>
                            :
                            <><MDButton variant='contained' type='submit' sx={{ mt: 3, ml: 2, width: '130px', backgroundColor: '#1976d2', "&:hover": { backgroundColor: "#1976d2" } }} size='large' text='Fweet' onClick={handleAddFweet} /></>
                    }
                </List>
            </Drawer>
        </>
    );
};

export default SideNav;