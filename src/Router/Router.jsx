import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/Error/ErrorPage";


const Router = createBrowserRouter([
     {
          path: '/',
          element: <MainLayout></MainLayout>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: "/",
                    element: <Home></Home>
               },
               {
                    path: "/donation",
                    element: <Donation></Donation>
               },
               {
                    path: "/statistics",
                    element: <Statistics></Statistics>
               }
          ]
     }
])


export default Router;