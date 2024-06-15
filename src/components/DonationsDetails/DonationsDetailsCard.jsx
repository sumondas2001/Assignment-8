import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import swal from "sweetalert";


const DonationsDetailsCard = ({ details }) => {
     const { id, img, donation_title, donation_price, donation_description, text_color } = details || {}
     // console.log(details)

     const textColor = {
          backgroundColor: text_color
     };

     const handelDonationAdd = () => {
          const getItem = JSON.parse(localStorage.getItem('donation'));
          const addDonationItemArray = []
          if (!getItem) {
               addDonationItemArray.push(details);
               localStorage.setItem('donation', JSON.stringify(addDonationItemArray));
               swal("Thank You!", "Your Douation Successfully", "success");
          }
          else {
               addDonationItemArray.push(...getItem, details);
               localStorage.setItem('donation', JSON.stringify(addDonationItemArray));
               swal("Thank You!", "Your Douation Successfully", "success");
          }
     }




     return (
          <div>
               <div className="  lg:mx-32 md:mx-16 mx-5  ">
                    <div className="">
                         <img className="w-full h-96 " src={img} alt="" />
                    </div>

                    <div className="relative bottom-24  ">
                         <div className="h-24 relative bg-black opacity-50 ">
                         </div>

                         <Link>
                              <button onClick={handelDonationAdd}
                                   style={textColor}
                                   className="lg:text-xl md:text-xl text-lg font-semibold md:px-6 lg:px-6 px-2 lg:py-4 md:py-4 py-3  text-white ml-10 absolute bottom-5 rounded-md">Donate $<span>{donation_price}</span>
                              </button>
                         </Link>

                    </div>


                    <h1 className="text-4xl font-bold ">{donation_title}</h1>
                    <p className="text-sm font-normal mb-10 mt-5">{donation_description}</p>

               </div>



          </div >
     );
};

DonationsDetailsCard.propTypes = {
     details: PropTypes.object
}
export default DonationsDetailsCard;