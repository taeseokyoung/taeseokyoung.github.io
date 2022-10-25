import React from 'react'
import { training } from "./Data";

const Training = () => {



    return (
        <section className="section">
            <div className="case">
                <div className="grid">
                    {
                        training.map(it => {
                            return (
                                <div className="trainbox" key={it.id}>
                                    <a href={it.link} target="_blank">
                                        <figure className={`training0${it.id}`}> </figure>
                                    </a>
                                    <h3>{it.title}</h3>
                                    <ul>
                                        {
                                            it.skill.map(
                                                it => <li className='btn'>{it}</li>
                                            )
                                        }
                                    </ul>
                                </div>

                            )
                        })
                    }
                    {/* <figure>04</figure>
                    <figure>05</figure>
                    <figure>06</figure> */}
                </div>
            </div>
        </section>
    )
}

export default Training;