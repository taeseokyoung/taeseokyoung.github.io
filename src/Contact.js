import React from 'react'
import { profile } from "./Data";

const Contact = () => {
    return (
        <section className="section">

            <div className="scase contact">
                <div className="tit">
                    <h2>Contact me!</h2>
                    <ul>
                        <li className='name'>{profile.name}</li>
                        <li className='email'>{profile.email}</li>
                        <li className='tel'>{profile.tel}</li>
                    </ul>
                </div>
                <div className="txt">
                    <figure className='tae02'></figure>
                </div>
            </div>
        </section>
    )
}

export default Contact;