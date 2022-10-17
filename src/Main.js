import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { }



const Main = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <section className="section">
            <div className="case">
                <div className="content">
                    <div className="up">
                        <ul className='keyword'>

                            <li>#WEB</li>
                            <li>#SPORT</li>
                            <li>#SHOPPINGMALL</li>
                        </ul>
                        <h2>LULULEMON</h2>
                        <p className='stit'>룰루레몬 웹사이트</p>
                    </div>
                    <div className="down">
                        <div className="color">
                            <dl>
                                <dt>Color</dt>
                                <dd></dd>
                                <dd></dd>
                                <dd></dd>
                            </dl>
                        </div>
                        <div className="font">
                            <dl>
                                <dt>Font</dt>
                                <dd>pretendard</dd>
                                <dd>Noto sans KR</dd>
                            </dl>
                        </div>
                        <p className='des'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, ab doloribus delectus explicabo a est officiis rerum unde omnis deleniti nulla pariatur consequuntur animi inventore ullam perferendis, quo id ipsa quia? Eum hic, esse voluptate atque maxime eligendi quam reprehenderit eveniet quasi nesciunt fugit minima ea ducimus corrupti quidem! Delectus!</p>
                    </div>
                </div>
                <div className="preview">
                    <ul>
                        <li className='btn'>REACT</li>
                        <li className='btn'>Styled-components</li>
                        <li className='btn'>Sass</li>
                    </ul>
                    <img src="" alt="" />
                </div>

            </div>
            {/* <Slider {...settings}>
                <div className='case'>1</div>
                <div className='case'>2</div>
                <div className='case'>3</div>
            </Slider> */}

        </section>
    )
}

export default Main