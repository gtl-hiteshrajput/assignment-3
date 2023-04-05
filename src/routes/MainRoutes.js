
// project import
import Profile from 'features/profile';
import AddFweet from 'features/fweet/Add';
import Dashboard from 'features/dashboard';
import MainLayout from 'layouts/MainLayout';
import ProtectedRoute from './ProtectedRoute';
import Details from 'features/profile/Details';
import FweetDetails from 'features/fweet/Details';

// render - sample page
// const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <ProtectedRoute><MainLayout /></ProtectedRoute>,
    children: [
        {
            path: '/',
            element: <></>
        },
        {
            path: 'color',
            element: <></>
        },
        {
            path: 'dashboard',
            element: <Dashboard />
        },
        {
            path: 'profile',
            element: <Profile />
        },
        {
            path: 'profile/:id',
            element: <Details />
        },
        {
            path: 'fweet/add',
            element: <AddFweet />
        },
        {
            path: 'fweet/:id',
            element: <FweetDetails />
        }
    ]
};

export default MainRoutes;
