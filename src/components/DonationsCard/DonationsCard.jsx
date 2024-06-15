import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonationsCard = ({ donation }) => {
     console.log(donation)
     const { id, img, donation_category, donation_title, donation_price, category_bacground_color, card_bacground_color, text_color } = donation || {};

     const categoryBacground = {
          backgroundColor: category_bacground_color,
     }
     const textColor = {
          color: text_color

     }
     const cardColor = {
          backgroundColor: card_bacground_color
     }
     return (
          <div>
               <div className="flex items-center rounded-md " style={cardColor}>
                    <div>
                         <img className="lg:h-56 md:h-48 h-44" src={img} alt="" />
                    </div>
                    <div className="lg:ml-14 md:ml-10 ml-5  pr-4">
                         <p
                              style={categoryBacground}
                              className='font-medium  w-24 px-2 py-1 mb-3 text-center rounded-lg text-white'>{donation_category}
                         </p>
                         <h1 className="text-lg font-bold" style={textColor}>{donation_title}</h1>
                         <p className="lg:text-base md:text-base text-xs font-semibold " style={textColor}>$ {donation_price}</p>
                         <Link to={`/donations/${id}`}><button className="text-base rounded-md font-semibold lg:px-4 lg:py-2 lg:mt-4 md:px-4 md:py-2 md:mt-4 px-2 py-1 mt-2 text-white" style={categoryBacground}>View Details</button></Link>
                    </div>
               </div>
          </div>
     );
};



DonationsCard.propTypes = {
     donation: PropTypes.object
}

export default DonationsCard;