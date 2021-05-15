/*  
💥 Title : ExploreOurFood
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 14/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import CardExploreOurFood from './CardExploreOurFood';
import './ExploreOurFood.css';
import food1 from '../../images/FoodItems/food1.png';
import food2 from '../../images/FoodItems/food2.png';
import food3 from '../../images/FoodItems/food3.png';
import food4 from '../../images/FoodItems/food4.png';
import food5 from '../../images/FoodItems/food5.png';
import food6 from '../../images/FoodItems/food6.png';

const ExploreOurFood = () => {
    return (
        <>
            <section className="exploreFoodWrapper">
                <h3>Explore Our Foods</h3>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore aut obcaecati
                    architecto non optio unde.
                </p>

                <div className="foodItemsRow">
                    <CardExploreOurFood foodName={food1} />
                    <CardExploreOurFood foodName={food2} />
                    <CardExploreOurFood foodName={food3} />
                    <CardExploreOurFood foodName={food4} />
                    <CardExploreOurFood foodName={food5} />
                    <CardExploreOurFood foodName={food6} />
                </div>
            </section>
        </>
    );
};

export default ExploreOurFood;
