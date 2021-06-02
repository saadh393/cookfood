import './App.css';
import image from './images/appStore.png';
import Banner from './Components/Banner/Banner';
import Booking from './Components/Booking/Booking';
import ExploreOurFood from './Components/ExploreOurFood/ExploreOurFood';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import MobileApp from './Components/MobileApp/MobileApp';
import OurFoods from './Components/OurFoods/OurFoods';
import OurServices from './Components/OurServices/OurServices';

function App() {
    return (
        <>
            <Hero />
            <Banner />
            <OurFoods />
            <Booking />
            <OurServices />
            <ExploreOurFood />
            <MobileApp />
            <Footer />
        </>
    );
}

export default App;
