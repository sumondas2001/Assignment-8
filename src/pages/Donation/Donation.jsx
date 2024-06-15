import { useLoaderData } from "react-router-dom";


const Donation = () => {
     const allData = useLoaderData();
     const data = localStorage.getItem('donation');
     console.log(allData)
     return (
          <div>
               <h1>this is donation section</h1>
          </div>
     );
};

export default Donation;