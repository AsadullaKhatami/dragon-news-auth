import { createBrowserRouter } from "react-router";
import Homelayout from "../layouts/Homelayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
        path: '/about',
        element: <div>aboutlayout</div>
    }, 
    {
        path: '/career',
        element: <div>careerlayout</div>
    }
])

export default router;