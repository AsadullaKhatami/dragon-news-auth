import { createBrowserRouter } from "react-router";
import Homelayout from "../layouts/Homelayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homelayout></Homelayout>,
        children:[
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json'),
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/about',
        element: <div>aboutlayout</div>
    }, 
    {
        path: '/career',
        element: <div>careerlayout</div>
    }
])

export default router;