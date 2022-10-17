import React from 'react'
import { gnb } from './Data'
import styled from "styled-components";

const Gnb = styled.header`
position:fixed;
width:140rem;
margin:0 auto;
.gnb{
    display:flex;
    justify-content: space-between;
    line-height:10rem;
    h1 {
        font-size:2rem;
        font-weight:500;
    }
    nav{
        display:flex;
        justify-content: flex-end;
    
       ul{
           li{
            display:inline-block;
            margin : 0 2rem 0 0; 
           }
        }
    }
    .resume {
        margin: 3rem 0 3rem 3rem;
        padding: 0 2rem;
       }
}

`;

const Header = () => {
    return (
        <header className='Header'>
            <Gnb>
                <div className="gnb">
                    <h1>Tae Seo Kyoung</h1>
                    <nav>
                        <ul>
                            {
                                gnb.map((it, idx) => {
                                    return (
                                        <li key={it.id}>{it.title}</li>
                                    )
                                })
                            }
                        </ul>
                        <button className="resume">Resume</button>
                    </nav>
                </div>
            </Gnb >
        </header>

    )
}

export default Header;