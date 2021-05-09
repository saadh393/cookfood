/*  
💥 Title : FoodCard
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 09/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import foodCard from '../../images/food-card-1.png';

const FoodCard = () => {
    return (
        <>
            <div className="ourfood-card">
                <img src={foodCard} className="card-image" />
                <div className="foodCard-info">
                    <h3>Fire Water</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae minima
                        exercitationem ipsam.
                    </p>
                    <div className="row foodcard-lower">
                        <div className="cardinfo-location">
                            <p>Hitech City</p>
                        </div>
                        <div className="cardinfo-booknow">
                            <button type="button">Book Now -&gt;</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCard;
