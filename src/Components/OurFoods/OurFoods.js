/*  
💥 Title : OurFoods
📃 Description : Our Foods List
✍ Author : Saad Hasan
⌚ Date : 09/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import FoodCard from './FoodCard';
import './OurFood.css';

const OurFoods = () => {
    return (
        <>
            <section className="ourprodouct-wrapper">
                <div className="ourfood-slider">
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                </div>
            </section>
        </>
    );
};

export default OurFoods;
