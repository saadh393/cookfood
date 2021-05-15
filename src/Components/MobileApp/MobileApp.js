/*  
💥 Title : MobileApp
📃 Description : Download App for Exiting Deals
✍ Author : Saad Hasan
⌚ Date : 15/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import appStore from '../../images/appStore.png';
import playStore from '../../images/playStore.png';
import mobileApp from '../../images/mobileApp.png';
import lotus from '../../images/lattuce2.png';
import bgOvarlay from '../../images/bg-overlay.png';
import './MobileApp.css';

const MobileApp = () => {
    return (
        <>
            <section className="mobileApp-wrapper">
                <div className="mobileApp-row">
                    <div className="mobileApp-text">
                        <h1>
                            Download App for <br /> Exciting Deals
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="mobileApp-platforms">
                            <img src={appStore} className="appStore" />
                            <img src={playStore} />
                        </div>
                    </div>
                    <div className="mobileApp-screenshort">
                        <img src={mobileApp} className="mobile-bg" />
                        <img src={lotus} className="lotas-bg" />
                        <img src={bgOvarlay} className="bgOvarlay" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default MobileApp;
