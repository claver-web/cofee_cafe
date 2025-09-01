import React, { Suspense, lazy } from 'react';
import Slideshow from '../components/LandingComponents/SlidShow';

const MenuCardCollection = lazy( () => import ('../components/LandingComponents/MenuCoffeeCards'));
const MenuContent = lazy(() => import ('../components/LandingComponents/MenuContent'));
const DetailRestro = lazy(() => import ('../components/LandingComponents/DetailRestro'));
const CafeReviews = lazy(() => import ('../components/LandingComponents/Reviews'));


function Home(){

    return(
        <>
            <Slideshow />
            <MenuCardCollection />
            <Suspense fallback={<div className='text-center text-lg text-cyan-600'>Loading...</div>}>
                <MenuContent />
                <DetailRestro />
                <CafeReviews />
            </Suspense>
            
        </>
    )
}

export default Home;