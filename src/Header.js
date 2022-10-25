import React from 'react'
import { gnb } from './Data'
import { useDispatch, useSelector } from 'react-redux'
import { change } from './store';

const Header = () => {
    const { changeMode } = useSelector(it => it)

    const dispatch = useDispatch();
    return (
        <div className='gnb'>
            <div className="navigation">
                <h1>Tae Seo Kyoung</h1>
                <nav>
                    <ul>
                        {
                            gnb.map((it, idx) => {
                                return (
                                    <li key={it.id}>
                                        <a href={`#${it.title}`}>{it.title}</a></li>
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

        </div >

    )
}

export default Header;