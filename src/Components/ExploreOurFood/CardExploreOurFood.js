/*  
💥 Title : CardExploreOurFood
📃 Description : Card
✍ Author : Saad Hasan
⌚ Date : 14/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */

const CardExploreOurFood = ({ foodName }) => {
    return (
        <>
            <div className="cardExplorar-wrapper">
                <img src={foodName} alt="" />
                <div className="cardData">
                    <div className="nameAndPrice">
                        <h3>Hand Sandwich</h3>
                        <h3 className="price"> $10.30</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
                        reiciendis.
                    </p>
                </div>
            </div>
        </>
    );
};

export default CardExploreOurFood;
