import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationsDetailsCard from "./DonationsDetailsCard";



const DonationsDetails = () => {
     const [details, setDetails] = useState()
     const donationDetailsData = useLoaderData();
     const { id } = useParams();
     const intId = parseInt(id)
     useEffect(() => {
          const detailsData = donationDetailsData.find(item => item.id === intId);
          setDetails(detailsData);
     }, [intId, donationDetailsData])

     // console.log(details)


     return (
          <div>
               <DonationsDetailsCard details={details}></DonationsDetailsCard>
          </div>
     );
};

export default DonationsDetails;