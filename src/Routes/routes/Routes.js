import Conditions from "../../components/images/Conditions/Conditions";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import News from "../../pages/News/News";
import Register from "../../pages/register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news'),
            },

            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Conditions></Conditions>
            }

        ]


    }



]);