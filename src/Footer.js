import React from 'react'
import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
const FootData = styled.footer`
display:flex;
position:fixed;
bottom:0;
width: calc(100% - 10rem);
margin:0 0 3rem 0;

.icon {
    display:flex;
    justify-content:flex-end;
    flex-direction:column;

    img {
    width:4rem;
    height:4rem;
    filter: invert(20%);
    }

    .github {
    font-size:2.5rem;
    margin:0.7rem;
    }
}
.license{
    margin:0 0 0 auto;
    p {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        font-size:1.4rem;
        span {
            font-size:1.2rem;
        }
    }
}`

const Footer = () => {

    return (
        <FootData>
            <div className="icon">
                <a href="https://tae-seokyoung.tistory.com/"><img src={process.env.PUBLIC_URL + "/image/tstory.svg"} alt="" /></a>
                <a href="https://github.com/taeseokyoung"><FiGithub className='github' /></a>
            </div>
            <div className="license">
                <p>Ver. <span>2022. 1. 0. 0.</span></p>
            </div>
        </FootData >
    )
}

export default Footer

// display:flex;
// // align-items:flex-end;
// justify-content: space-between;
// .right {
//     p {
//         writing-mode: vertical-rl;
//         text-orientation: mixed;
//     }
// }