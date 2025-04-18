import React from 'react'
import '../Content.css'
export function Education({ }) {
    return (
        <>
            <div className='card-content' >
                <div className="card">
                    <h1 className='text-title'>My Experience</h1>
                    <h5 className='text'>UNIVERSIDAD CATOLICA DE PEREIRA 2022 - 2024</h5>
                    <ul className='text'>
                        <li>
                            <h1 className='text'>
                                Develop web pages with a focus on full-stack
                                development.

                            </h1>

                        </li>
                        <li>
                            <h1 className='text'>Design and utilize SQL and NoSQL databases
                            </h1>
                        </li>
                        <li>
                            <h1 className='text'>Document software project processes and
                                methodologies.
                            </h1>
                        </li>
                        <li>
                            <h1 className='text'>Successfully completed a start-up project from UX/UI
                                prototyping to final delivery.
                            </h1>
                        </li>
                        <li>
                            <h1 className='text'>Optimized queries in an educational database that faced
                                performance issues due to missing indexes and poor
                                execution plans.

                            </h1>
                        </li>

                    </ul>

                </div>
            </div>
        </>
    )
}