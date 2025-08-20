import { createBrowserRouter } from 'react-router-dom'; 
import Root from './Root'; 
import LoginForm from './Auth/login-form';
import SignupForm from './Auth/signup-form';
import Dashboard from './dashboard/dashboard-page'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        //pages with components
        children: [
            {
                path: "",
                element: <LoginForm />,
            },
            {
                path: "auth/signup",
                element: <SignupForm />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);

export default router;