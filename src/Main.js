import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { portfolio } from "./Data";




const Main = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <section className="section">
            <Slider {...settings}>
                {
                    portfolio.map((pf, idx) => {
                        return (
                            <div className="case" key={idx}>
                                <div className="scase">
                                    <div className="content">
                                        <div className="up">
                                            {/* <ul className='keyword'>
                                                {
                                                    pf.type.map((type, idx) => {
                                                        return (
                                                            <li key={idx}>{type}</li>
                                                        )
                                                    })
                                                }
                                            </ul> */}
                                            <h2>{pf.title}</h2>
                                            <p className='stit'>{pf.stitle}</p>
                                        </div>
                                        <div className="down">
                                            <dl className='type'>
                                                <dt>TYPE</dt>
                                                {
                                                    pf.type.map((type, idx) => {
                                                        return (
                                                            <dd key={idx}>{type}</dd>
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
                                            <p className='des'>{pf.info}</p>
                                        </div>
                                    </div>
                                    <div className="preview">
                                        <ul>
                                            {
                                                pf.skill.map((skill, idx) => {
                                                    return (
                                                        <li key={idx} className="btn">{skill}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        {/* {
                                            pf.map((it, idx) => <figure key={idx}><img src={it.src} alt="" /></figure>)
                                        } */}
                                        <figure>
                                            <a href={pf.link} target="_blank">
                                                <img src={pf.src} alt="" />
                                            </a>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </section>
    )
}

export default Main