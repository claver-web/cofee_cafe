import Slideshow from '../components/LandingComponents/SlidShow';
import MenuCardCollection from '../components/LandingComponents/MenuCoffeeCards';
import MenuContent from '../components/LandingComponents/MenuContent';
import DetailRestro from '../components/LandingComponents/DetailRestro';
import CafeReviews from '../components/LandingComponents/Reviews';


function Home(){

    return(
        <>
            <Slideshow />
            <MenuCardCollection />
            <MenuContent />
            <DetailRestro />
            <CafeReviews />
        </>
    )
}

export default Home;