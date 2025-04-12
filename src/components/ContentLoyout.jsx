
import react, { useEffect, useState } from 'react'

import '../content.css'
import { Header } from './Header.jsx'
import { TopNav } from './TopNav.jsx'
import { Card } from './Card.jsx'
export function ContentLoyout({ }) {
    const [type, setType] = useState('Any')
    const [img, setImage] = useState('')
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    var url = `https://v2.jokeapi.dev/joke/${type}?lang=es&type=single&amount=3`
    const handleOnClick = (e) => {
        setId(e.target.value)
        setCount(count + 1)
    }
    var req = new Request(url);
    useEffect(() => {
        fetch(req)
            .then(Response => Response.json())
            .then(data => setData(data.jokes))
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }, [count])


    useEffect(() => {
        data.map(item => setData(...data, item.joke))
    }, [count])

    console.log(data)
    return (
        <>
            <Header />

            <TopNav />
            <button onClick={handleOnClick}>{count}</button>
            <div className="row">
                <div className="leftcolumn">
                    {data.map((item, index) => (
                        <div key={index}>
                            <Card
                                Title={item.joke}

                            />
                        </div>
                    ))}



                </div>
                <div className="rightcolumn">
                    <div className="card">
                        <h2>About Me</h2>
                        <div className="fakeimg" >Image</div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    </div>
                    <div className="card">
                        <h3>Popular Post</h3>
                        <div className="fakeimg"><p>Image</p></div>
                        <div className="fakeimg"><p>Image</p></div>
                        <div className="fakeimg"><p>Image</p></div>
                    </div>
                    <div className="card">
                        <h3>Follow Me</h3>
                        <p>Some text..</p>
                    </div>
                </div>
            </div>

            <div className="footer">
                <h2>Footer</h2>
            </div>
        </>
    )
}