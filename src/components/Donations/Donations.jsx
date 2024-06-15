import PropTypes from 'prop-types';
import DonationData from '../DonationCard/DonationCard';

const Donations = ({ donationsData }) => {


     return (
          <div className="mt-10">
               <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-20'>
                    {
                         donationsData?.map(donation => <DonationData donation={donation} key={donation.id}></DonationData>)
                    }
               </div>
          </div>
     );
};

Donations.propTypes = {
     donationsData: PropTypes.array
}

export default Donations;