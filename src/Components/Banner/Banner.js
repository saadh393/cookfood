/*  
💥 Title : Banner
📃 Description : Banner 
✍ Author : Saad Hasan
⌚ Date : 09/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import './Banner.css';

const Banner = () => {
    return (
        <>
            <section className="bannar-wrapper">
                <div className="row bannar-row">
                    <div className="left">
                        <h1>Some Top restaurant for dining out or in !</h1>
                    </div>
                    <div className="right">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officia
                            in laboriosam, nesciunt totam rerum et vitae facilis, tenetur molestiae
                            quas sit? Commodi, repellendus debitis!
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
