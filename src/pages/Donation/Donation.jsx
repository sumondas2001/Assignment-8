import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import DonationsCard from "../../components/DonationsCard/DonationsCard";




const Donation = () => {
     const [isShow, setIsShow] = useState(false)
     const [donationsData, setDonationsData] = useState([])
     const [notFound, setNotFound] = useState(false);
     useEffect(() => {
          const data = JSON.parse(localStorage.getItem('donation'));
          if (data) {
               setDonationsData(data)
          } else {
               setNotFound('No Data Found')
          }

     }, []);

     // console.log(donationsData)

     return (
          <div>
               {
                    notFound ? <div className="h-[70vh] flex flex-col gap-10 items-center justify-center">
                         <p className=" text-xl font-bold">{notFound}</p>
                         <Link to={'/'}>
                              <button className="text-lg font-medium bg-red-500 px-4 py-2 rounded-lg">Donation</button>
                         </Link>
                    </div> : <div>
                         <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6  lg:mx-20 md:mx-10 mx-4  mt-10 mb-16">
                              {
                                   isShow ? donationsData.map((donation, index) => <DonationsCard donation={donation} key={index}></DonationsCard>) : donationsData.slice(0, 4).map((donation, index) =>
                                        <DonationsCard donation={donation} key={index}>
                                        </DonationsCard>)


                              }

                         </div>
                         {
                              donationsData.length > 4 && (
                                   !isShow && (
                                        <div className="justify-center flex mb-4">
                                             <button onClick={() => setIsShow(!isShow)} className="text-lg font-medium text-center bg-lime-500 text-white px-4 py-2 rounded-lg">See More</button>
                                        </div>
                                   )
                              )

                         }

                    </div>


               }


          </div >


     )
};

export default Donation;