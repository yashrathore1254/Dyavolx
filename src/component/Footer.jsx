import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Footer = () => {
    const footerRef = useRef();
    const listItemsRef = useRef([]);
    const emailRef = useRef();

    useGSAP(() => {


        gsap.from(listItemsRef.current, {
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: footerRef.current,
                start: 'top 90%',
            }
        });

        gsap.from(emailRef.current, {
            opacity: 0,
            y: 20,
            delay: 0.5,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: footerRef.current,
                start: 'top 90%',
            }
        });
    }, []);

    return (
        <div ref={footerRef} className='bg-[#000000] w-full relative z-1 pb-[3rem]'>
            <div className='w-full flex flex-wrap justify-around py-[3rem] gap-6'>
                {/* Logo */}
                <div>
                    <img src="/images/nav_logo.avif" alt="logo" className='w-24' />
                </div>

                {/* Links Group 1 */}
                <div>
                    <ul className='text-white flex flex-col gap-2 uppercase'>
                        {['Home', 'About', 'Instagram'].map((text, i) => (
                            <li
                                key={text}
                                ref={(el) => (listItemsRef.current[i] = el)}
                            >
                                <Link to={`/${text.toLowerCase()}`}>{text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Links Group 2 */}
                <div>
                    <ul className='text-white flex flex-col gap-2 uppercase font-[font1]'>
                        {['Shipping & returns', 'Privacy Policy', 'Terms & Conditions'].map((text, i) => (
                            <li
                                key={text}
                                ref={(el) => (listItemsRef.current[i + 3] = el)}
                            >
                                <Link to={`/${text.toLowerCase().replace(/ &| /g, '-').replace(/'/g, '')}`}>
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Email Subscription */}
                <div ref={emailRef} className='flex flex-col gap-2'>
                    <h2 className='text-white uppercase'>Subscribe to our newsletter</h2>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        className='p-2 rounded-md border border-gray-300 outline-none focus:border-gray-500 uppercase text-white bg-black placeholder:text-white'
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
