import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Donations from "../../components/Donations/Donations";
import DonationData from "../../components/DonationCard/DonationCard";



const Home = () => {
     const donationsData = useLoaderData();

     return (
          <div>
               <Banner></Banner>
               <Donations donationsData={donationsData}></Donations>

          </div>
     );
};

export default Home;