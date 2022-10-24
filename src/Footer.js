import React from 'react'
import styled from "styled-components";
import { FiGithub } from "react-icons/fi";


const Footer = () => {

    return (
        <footer>
            <div className="icon">
                <a href="https://tae-seokyoung.tistory.com/"><img src={process.env.PUBLIC_URL + "/image/tstory.svg"} alt="" /></a>
                <a href="https://github.com/taeseokyoung"><FiGithub className='github' /></a>
            </div>
            <div className="license">
                <p>Ver. <span>2022. 1. 0. 0.</span></p>
            </div>
        </footer >
    )
}

export default Footer;

// display:flex;
// // align-items:flex-end;
// justify-content: space-between;
// .right {
//     p {
//         writing-mode: vertical-rl;
//         text-orientation: mixed;
//     }
// }