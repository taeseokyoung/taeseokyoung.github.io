import React from 'react'
import { profile } from "./Data";
import { FiMail, FiSmartphone } from "react-icons/fi";
const Contact = () => {
    return (
        <section className="section">
            <div className="contact">
                <div className="left">
                    <h2>저에게<br /><span>전화와 이메일로</span><br />연락하실 수 있습니다. </h2>
                    <ul>
                        <li className='email'>
                            <FiMail />
                            <a href={profile.email}>{profile.email}</a>
                        </li>
                        <li className='tel'>
                            <FiSmartphone />
                            <a href={profile.tel}>{profile.tel}</a>
                        </li>
                    </ul>
                    <button className='btn'>RESUME</button>
                </div>
                <div className="right">
                    <figure className='tae02'></figure>
                </div>
            </div>
        </section>
    )
}

export default Contact;