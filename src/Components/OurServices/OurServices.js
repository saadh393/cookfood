/*  
💥 Title : OurServices
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 12/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import bikewithText from '../../images/bikewithText.png';
import dish from '../../images/dish.png';
import meeting from '../../images/meeting.png';
import './OurServices.css';

const OurServices = () => {
    return (
        <>
            <section className="ourservice-wrapper">
                <div className="ourservice-row-1">
                    <div className="row1-left">
                        <h1>Our Services</h1>
                    </div>
                    <div className="row1-right">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
                            commodi repellendus fugiat voluptas quasi. Vel doloribus sapiente
                            adipisci et officia.
                        </p>
                    </div>
                </div>
                <div className="ourservice-row-2">
                    <div className="ourServiceGrid">
                        <div className="tableBookingImage centerInParent">
                            <img src={meeting} alt="" />
                        </div>
                        <div className="tableBookingText centerInParent">
                            <h3>advanced table</h3>
                            <h3 className="booking">booking</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur </p>
                        </div>
                        <div className="freeHomeDelivary centerInParent">
                            <img src={bikewithText} alt="" />
                        </div>
                        <div className="freeFoodText ">
                            <h3>Food for Free</h3>
                            <h3 className="freeFood">24/7</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur </p>
                        </div>
                        <div className="freeFoodImage centerInParent">
                            <img src={dish} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurServices;
