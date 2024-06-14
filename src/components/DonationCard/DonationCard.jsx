import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
     const { id, img, donation_category, donation_title, category_bacground_color, card_bacground_color, text_color } = donation || {}
     // console.log(donation)

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
               <Link>
                    <div className='rounded-lg ' style={cardColor}>
                         <img src={img} alt="" />
                         <div className='pl-4 pt-4'>

                              <p
                                   style={categoryBacground}
                                   className='font-medium  w-24 px-2 py-1 mb-3 text-center rounded-lg'>{donation_category}
                              </p>

                              <h1 style={textColor} className="text-xl font-semibold pb-6">{donation_title}</h1>
                         </div>
                    </div>
               </Link>
          </div >
     );
};
DonationCard.propTypes = {
     donation: PropTypes.object
}
export default DonationCard;