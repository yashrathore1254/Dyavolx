import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// import "./Herosection.css"




const Herosection = () => {
  useGSAP(() => {
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-1",
        start: "52% 50%",
        end: "400% top",
        scrub: 2,

      },
    });

    heroTl.to(".rotate-div", {
      transform: "translate3d(0px, 0px, 0px) scale3d(0.650052, 0.650052, 1) rotateX(0deg) rotateY(0deg) rotateZ(-10.9974deg) skew(0deg, 0deg)",
    }, "a");

    heroTl.to(".row-div", {
      transform: "translate3d(0px, -25.9968%, 0px)",
    }, "a");

    heroTl.to(".overlay-div", {
      opacity: 1,
    }, "a");

    heroTl.to(".overlay-div h1", {
      scale: 1,

    }, "a");

    heroTl.to(".row-1", {
      marginTop: "-35%",
    }, "a");

    heroTl.to(".row-2", {
      marginTop: "-30%",
    }, "a");

    heroTl.to(".row-3", {
      marginTop: "-25%",
    }, "a");

    heroTl.to(".row-4", {
      marginTop: "-20%",
    }, "a");

    heroTl.to(".row-5", {
      marginTop: "-16%",
    }, "a");
  }, []);

  return (
    <>
      <div className='part-1'>
        <div className='content-part-1'>
          <div className='rotate-div'>
            <div className='row-div row-1'>
              <div className="img-div">
                <img src="/images/Banner-2-1242-1350.webp" alt="" />
              </div>
              <div className="img-div">
                <img src="/images/img14.jpg" alt="" />
              </div>
              <div className="img-div">
                <img src="/images/Banner-1242-1350.webp" alt="" />
              </div>
              <div className="img-div">
                <img src="/images/img12.jpg" alt="" />
              </div>
            </div>
            <div className='row-div row-2'>
              <div className="img-div">
                <img src="/images/X-Cap-1.webp" alt="" />
              </div>
              <div className="img-div">
                <img src="/images/X-GFBanner-1242-1350.webp" alt="" />
              </div>
              <div className="img-div">
                <img src="/images/Menu-Drawer-Blackout-Hoodie-2256-3000_1200x.webp" alt="" />
              </div>
              <div className="img-div">
                <img src="/images/img5.jpg" alt="" />
              </div>
            </div>
            <div className='row-div row-3'>
              <div className="img-div">
                <img src="/images/Midnight-1.webp" alt="" />
              </div>
              <div className="img-div">
                <img src="/images/img5.jpg" alt="" />
              </div>
              <div className="img-div">
                <img src="/images/Blackout-Hoodie-1.webp" alt="" />
              </div>
              <div className="img-div">
                <img src="/images/img8.jpeg" alt="" />
              </div>
            </div>
            <div className='row-div row-4'>
              <div className="img-div">

                <img src="/images/Whiteout-Banner-1242-1350.webp" alt="" />
              </div>
              <div className="img-div">
                <img src="/images/img4.jpeg" alt="" />
              </div>
              <div className="img-div">
                <img src="/images/img2.jpeg" alt="" />
              </div>
              <div className="img-div">
                <img src="/images/img5.jpg" alt="" />
              </div>
            </div>
            <div className='row-div row-5'>
              <div className="img-div">
                <img src="/images/Banner-1242-1350.webp" alt="" />
              </div>
              <div className="img-div">
                <img src="/images/img5.jpg" alt="" />
              </div>
              <div className="img-div">
                <img src="/images/Menu-Drawer-X-Action-Cap-2256-3000_1200x.webp" alt="" />
              </div>
              <div className="img-div">
                <img src="/images/Whiteout-Banner-1242-1350.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Herosection