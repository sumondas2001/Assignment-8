import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/Error/ErrorPage";
import DonationsDetails from "../components/DonationsDetails/DonationsDetails";


const Router = createBrowserRouter([
     {
          path: '/',
          element: <MainLayout></MainLayout>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: "/",
                    element: <Home></Home>,
                    loader: () => fetch('/donation.json')
               },
               {
                    path: "/donation",
                    element: <Donation></Donation>

               },
               {
                    path: "/statistics",
                    element: <Statistics></Statistics>
               },
               {
                    path: "/donations/:id",
                    element: <DonationsDetails></DonationsDetails>,
                    loader: () => fetch('/donation.json')
               }

          ]
     }
])


export default Router;