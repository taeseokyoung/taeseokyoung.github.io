import React from 'react'
import { gnb } from './Data'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { change } from './store';

const Gnb = styled.div`
position:fixed;
width: calc(100% - 10rem);
z-index:999;
.navigation{
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
            font-weight:500;
            color: #333;
           }
        }
    }
    .dark_btn {
        display: block;
       }
}

`;

const Header = () => {
    const { changeMode } = useSelector(it => it)

    const dispatch = useDispatch();
    return (
        <div className='gnb'>
            <Gnb>
                <div className="navigation">
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
                        {/* <button className="resume">Resume</button> */}
                        <div className='dark_btn'>
                            <label htmlFor='btn' className={changeMode ? "on" : ""}>
                                dark
                            </label>
                            <button id='btn' onClick={() => dispatch(change())}>
                                darkbtn
                            </button>
                        </div>
                    </nav>
                </div>
            </Gnb >
        </div >

    )
}

export default Header;