import React from 'react'
import { PrevProjects } from './PrevProjects.jsx'
import '../Content.css'
export function AboutMe({ showProjects }) {
    const handleOnClick = () => {
        showProjects(true);
        console.log("clicked");
    }
    return (
        <>
            <div className='card-content'>
                <div className="card">
                    <h2 className='text-title'>About Me</h2>
                    <div className="fakeimg">
                        <img src="https://media.licdn.com/dms/image/v2/D5635AQFCh0lZbIcRVA/profile-framedphoto-shrink_200_200/B56ZYWSC4LHQAg-/0/1744130551716?e=1746032400&v=beta&t=3L82utG8FuR_Up_xEG9eQY3qKh882ys4asaw419sE4E " alt="Perfil" />
                    </div>
                    <section className='text-section'>
                        <h1 className='text-title'>Santiago Ramirez Castellanos</h1>
                        <p className='text'>Software Developer - Back-End - MERN Stack - | MongoDB | Express.js | React.js | Node.js |</p>
                        <p className='text'>I am a Front-End Software Developer with
                            one year of experience, combining a
                            strong foundation in UI and UX design.
                            My expertise lies in modern technologies,
                            including React.js and Angular.
                            I have contributed to national start-up
                            projects, offering full-time support
                            throughout the entire software lifecycle.
                            Committed to continuous learning, I am
                            dedicated to expanding my development
                            skills and adopting best practices to
                            deliver high-quality solutions.


                        </p>

                    </section>
                    <button className="button" onClick={handleOnClick}>Show Projects</button>
                </div>
            </div>
        </>
    )
}