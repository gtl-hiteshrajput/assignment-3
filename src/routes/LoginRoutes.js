// project import
import MinimalLayout from 'layouts/MinimalLayout';
import SignIn from 'features/authentication/sign-in/SignIn';
import SignUp from 'features/authentication/sign-up/SignUp';

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: 'login',
            element: <SignIn />
        },
        {
            path: 'register',
            element: <SignUp />
        }
    ]
};

export default LoginRoutes;
