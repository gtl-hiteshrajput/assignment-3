import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';


// ==============================|| MENU ITEMS ||============================== //

const sideMenuItems = [
    {
        id: 0,
        path: '',
        toPath: '/dashboard',
        pathLabel: 'Home',
        pathIcon: <HomeIcon />
    },
    {
        id: 1,
        path: 'profile',
        toPath: '/profile',
        pathLabel: 'Profile',
        pathIcon: <PersonIcon />
    },
    {
        id: 3,
        path: '#',
        toPath: '/dashboard',
        pathLabel: 'Notification',
        pathIcon: <NotificationsIcon />
    }
];

export { sideMenuItems };
