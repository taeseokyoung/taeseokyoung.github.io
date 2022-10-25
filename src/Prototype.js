import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { portfolio } from "./Data";
// import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";



const Prototype = () => {

    const mainSlide = useRef(null);

    const settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <section className="section">
            <Slider {...settings} ref={mainSlide} className="prototypeSlide">
                {
                    portfolio.map((pf, idx) => {
                        return (
                            <div className="case" key={idx}>
                                <div className="inner">
                                    <div className="content">
                                        <div className="up">
                                            <h2>{pf.title}</h2>
                                            <p className='stit'>{pf.stitle}</p>
                                        </div>
                                        <p className='des'>{pf.info}</p>
                                        <div className="down">
                                            <dl className='type'>
                                                <dt>Type</dt>
                                                {
                                                    pf.type.map((type, idx) => {
                                                        return (
                                                            <dd key={idx}>{type}</dd>
                                                        )
                                                    })
                                                }
                                            </dl>
                                            <dl className='type'>
                                                <dt>Stack</dt>
                                                {
                                                    pf.skill.map((skill, idx) => {
                                                        return (
                                                            <dd key={idx}>{skill}</dd>
                                                        )
                                                    })
                                                }
                                            </dl>
                                            <dl className="font">
                                                <dt>Font</dt>
                                                {
                                                    pf.font.map((font, idx) => {
                                                        return (
                                                            <dd key={idx}>{font}</dd>
                                                        )
                                                    })
                                                }
                                            </dl>
                                            <dl className="color">
                                                <dt>Color</dt>
                                                {
                                                    pf.color.map((color, idx) => {
                                                        return (
                                                            <dd key={idx} style={{ background: color }}>{color}</dd>
                                                        )
                                                    })
                                                }
                                            </dl>

                                        </div>
                                    </div>
                                    <div className="preview">
                                        <a href={pf.link} target="_blank">
                                            <figure className={`itm0${pf.id}`}></figure>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <div className="slideArrows">
                <button onClick={() => mainSlide.current.slickPrev()}><TfiAngleLeft /></button>
                <button onClick={() => mainSlide.current.slickNext()}><TfiAngleRight /></button>
            </div>
        </section>
    )
}

export default Prototype;