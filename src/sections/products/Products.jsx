import React from 'react';
// import { Card, BentoTilt, DyavolXGrid } from '../../component/Features.jsx'
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Productsdata } from '../../Utils';
import Layout1 from '../../component/Layout1';
import Layout2 from '../../component/Layout2';
const Products = () => {


    const layoutMap = {
        layout1: Layout1,
        layout2: Layout2
    }
    return (
        <>
            <div className='w-full relative z-[2] bg-black '>
                {Productsdata.map((item) => {
                    const Component = layoutMap[item.layoutType] || Layout1;
                    return <Component key={item.id} items={item} />;
                })}
            </div>
        </>
    )


}
export default Products;

