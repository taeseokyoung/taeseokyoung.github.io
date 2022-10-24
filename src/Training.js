import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { portfolio } from "./Data";


const Training = () => {



    return (
        <section className="section">
            <div className="case">
                <div className="grid">
                    <figure className='t01'>
                        <button>1</button>
                    </figure>
                    <figure className='t02'>
                        <button>2</button>
                    </figure>
                    <figure className='t03'>
                        <button>3</button>
                    </figure>
                    {/* <figure>04</figure>
                    <figure>05</figure>
                    <figure>06</figure> */}
                </div>
            </div>
        </section>
    )
}

export default Training;