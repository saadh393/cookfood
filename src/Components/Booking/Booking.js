/*  
💥 Title : Booking
📃 Description : Booking Form
✍ Author : Saad Hasan
⌚ Date : 12/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import latus1 from '../../images/lattuce.png';
import './Booking.css';

const Booking = () => {
    return (
        <>
            <section className="booking-Wrapper">
                <img src={latus1} />
                <div className="booking-area">
                    <span className="border" />
                    <h2>Advanced Booking</h2>
                    <div className="booking-form">
                        <input type="text" placeholder="Search For Restaurents" />
                        <button type="button">Go</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Booking;
