/*  
💥 Title : Footer
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 15/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <h2>Get Notified</h2>
                <h2>about new amazing products</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat possimus quod
                    quaerat.
                </p>

                <div className="newsletterEmail">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Go</button>
                </div>

                <ul>
                    <li>Poduct</li>
                    <li>Company</li>
                    <li>Learn More</li>
                    <li>Get in Touch</li>
                </ul>
            </footer>
        </>
    );
};

export default Footer;
