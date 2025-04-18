import React from 'react'
import '../Content.css'
export function Education({ }) {
    return (
        <>
            <div className='card-content' >
                <div className="card">
                    <section className='text-section'>
                        <h1 className='text-title'>My Experience</h1>
                        <p className='text'>UNIVERSIDAD CATOLICA DE PEREIRA 2022 - 2024</p>
                        <ul className='text'>
                            <li>
                                <p className='text'>
                                    Develop web pages with a focus on full-stack
                                    development.

                                </p>

                            </li>
                            <li>
                                <p className='text'>Design and utilize SQL and NoSQL databases
                                </p>
                            </li>
                            <li>
                                <p className='text'>Document software project processes and
                                    methodologies.
                                </p>
                            </li>
                            <li>
                                <p className='text'>Successfully completed a start-up project from UX/UI
                                    prototyping to final delivery.
                                </p>
                            </li>
                            <li>
                                <p className='text'>Optimized queries in an educational database that faced
                                    performance issues due to missing indexes and poor
                                    execution plans.

                                </p>
                            </li>

                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}