/*  
💥 Title : Hero
📃 Description : Hero Section Of Cook Food Site
✍ Author : Saad Hasan
⌚ Date : 09/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import foodOfPlate from '../../images/foodofplate.png';
import './Hero.css';

const Hero = () => {
    return (
        <>
            <main>
                <div className="hero-root row">
                    <div className="hero-left">
                        <h1 className="ovarlayText">FOOD</h1>
                        <h1>
                            Discover Restaurand <br />& Delicious Food
                        </h1>
                        <div className="hero-search">
                            <input type="text" />
                            <button type="button">Go</button>
                        </div>
                    </div>
                    <div className="hero-right">
                        <img src={foodOfPlate} className="hero-image" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Hero;
