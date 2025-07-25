import React from 'react'
import Herosection from './sections/herosection/Herosection'

import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from 'gsap';
import MessageSection from './sections/messagesection/MessageSection';
import Collectionsection from './sections/collectionsection/Collectionsection';
import TestimonialSection from './sections/testimonialsection/TestimonialSection';
import VideoSection from './sections/videosection/VideoSection';
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
import { useEffect, useState } from 'react';
import Loader from './component/Loader';
import ClippathSection from './sections/clippathsection/ClippathSection';
import Products from './sections/products/Products';
import Footer from './component/Footer';
import Navbar from './component/Navbar';


const App = () => {


  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Dummy Loader
  if (loading) return <Loader onFinish={() => setLoading(false)} />

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper w-full overflow-hidden">
        <div id="smooth-content w-full ">
          <Herosection />
          <MessageSection />


          <Products />
          <ClippathSection />
          <TestimonialSection />
          <Footer />

        </div>
      </div>


    </>
  )
}

export default App