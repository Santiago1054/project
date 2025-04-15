
import react, { use, useEffect, useState } from 'react'

import '../content.css'
import { Header } from './Header.jsx'
import { TopNav } from './TopNav.jsx'
import { Card } from './Card.jsx'


export function ContentLoyout({ }) {
    //Declare the variables
    const [title, setTitle] = useState("");
    const [titleDescription, setTitleDescription] = useState("");
    const [error, setError] = useState("");
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    const [id, setId] = useState(0);
    const [popular, setPopular] = useState([]);
    const [valorDesdeHijo, setValorDesdeHijo] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    /*//Use the useEffect to set the data from the local storage
    useEffect(() => {
        const data = localStorage.getItem("data");
        if (data) {
            setData(JSON.parse(data));
        }
    }, []);
    //Use the useEffect to save the data to the local storage
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data));
    }, [data]);*/
    const recibirValor = (valor) => {
        setValorDesdeHijo(valor);

    };
    const recibirId = (valor) => {

        setDislikes(valor);
    };
    //Handle the form submit
    const handleOnClick = (e) => {
        e.preventDefault();

        //Check if the fields are empty
        //If they are empty, set the error message  and return  
        if (!title || !titleDescription || !text) {
            setError("Please fill all the fields");
            return;
        } else {
            //If the fields are not empty, set the data and clear the fields
            //Set the data to the state and clear the fields 

            setError("");
            setId(id + 1)
            setData([...data, { title, titleDescription, text, valorDesdeHijo, dislikes, id }]);

            setTitle("");
            setTitleDescription("");
            setText("");

            console.log("id out", id);
            console.log("id dislikes", dislikes);



        }

    }

    useEffect(() => {

        setId(dislikes)
        setData(prevItems =>
            prevItems.map((item, id) =>
                id === dislikes ? { ...item, valorDesdeHijo } : item
            )
        );
        console.log("jjjj", id);
    }, [valorDesdeHijo]);
    useEffect(() => {
        setId(id)
        console.log("now", id);
        console.log("dislikes now", dislikes);
    }, [id]);


    return (
        <>
            <Header />
            <TopNav />
            <div className="row">
                <div className="leftcolumn">
                    <div class="container">
                        <h1 className='text-title'>New Post</h1>
                        <form >
                            <div class="row">
                                <div class="col-25">
                                    <label className='text' htmlFor="fname">Post Title:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="fname" name="firstname" value={title} placeholder="Your post title.." onChange={(e) => setTitle(e.target.value)} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label className='text' htmlFor="lname">Post Author</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="lname" name="lastname" value={titleDescription} placeholder="Your full name.." onChange={(e) => setTitleDescription(e.target.value)} />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label className='text' htmlFor="subject">Post Content</label>
                                </div>
                                <div class="col-75">
                                    <textarea id="subject" name="subject" placeholder="Write something.." value={text} onChange={(e) => setText(e.target.value)} />
                                </div>
                            </div>
                            <br></br>
                            <div class="row">
                                <input type="submit" value="Create" onClick={handleOnClick} />
                            </div>
                        </form>
                        {error && <p className='error'>{error}</p>}
                    </div>
                    {
                        data.length > 0 ? // If there is data, show the cards
                            (data.map
                                (
                                    (item, id) => (
                                        <Card key={id} Title={item.title} TitleDescription={item.titleDescription} Text={item.text}
                                            onEnviarValor={recibirValor} onDislikes={recibirId} liked={item.valorDesdeHijo} id={id} />
                                    )
                                )
                            )
                            :  // If there is no data, show a message
                            (

                                <h1 className='text-title'>No content available</h1>

                            )

                    }
                </div>
                <div className="rightcolumn">
                    <div className="card">
                        <h2 className='text-title'>About Me</h2>
                        <div class="fakeimg">
                            <img src="https://media.licdn.com/dms/image/v2/D5635AQFCh0lZbIcRVA/profile-framedphoto-shrink_200_200/B56ZYWSC4LHQAg-/0/1744130551716?e=1745262000&v=beta&t=9iheAYiAZc1WTE82i8awo1V5CaQEHnBtiAJvmx328F4 " alt="Perfil" />
                        </div>
                        <h3 className='text-title'>Santiago Ramirez Castellanos</h3>
                        <p className='text'>Software Developer - Back-End - MERN Stack - | MongoDB | Express.js | React.js | Node.js |</p>
                    </div>
                    <div className="card">
                        <h3 className='text-title'>Popular Post</h3>
                        {
                            data.length > 0 ? // If there is data, show the cards
                                (data.filter(item => item.valorDesdeHijo > 3).map
                                    (
                                        (item, id) => (
                                            <Card key={id} Title={item.title} TitleDescription={item.titleDescription} id={id} />
                                        )
                                    )
                                )
                                :  // If there is no data, show a message
                                (

                                    <h1 className='text-title'>No content available</h1>

                                )

                        }

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