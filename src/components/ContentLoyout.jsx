
import React, { useEffect, useRef } from 'react'

import '../content.css'
import { Header } from './Header.jsx'
import { TopNav } from './TopNav.jsx'
import { Card } from './Card.jsx'
import { Constants } from '../constants/Constants.js'
import { AboutMe } from './AboutMe.jsx'
import { PrevProjects } from './PrevProjects.jsx'
export function ContentLoyout({ }) {
    const inputRef = useRef(null);
    //Declare the variables
    const {
        title, setTitle,
        titleDescription, setTitleDescription,
        error, setError,
        text, setText,
        data, setData,
        id, setId,
        popular, setPopular,
        valorDesdeHijo, setValorDesdeHijo,
        dislikes, setDislikes,
        btt, setBtt
    } = Constants();

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
    const recibirbutton = (valor) => {
        setBtt(valor);
        console.log("valor", valor);
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
            //console.log("id out", id);
            // console.log("id dislikes", dislikes);
        }
    }

    useEffect(() => {
        setId(dislikes)
        setData(prevItems =>
            prevItems.map((item, id) =>
                id === dislikes ? { ...item, valorDesdeHijo } : item
            )
        );
        //console.log("jjjj", id);
    }, [valorDesdeHijo]);

    useEffect(() => {
        setId(id)
        //console.log("now", id);
        // console.log("dislikes now", dislikes);
    }, [id]);
    useEffect(() => {
        if (btt == true) {
            inputRef.current.focus();
            setBtt(false);
            console.log("btt", btt);
        }


    }, [recibirbutton]);

    return (
        <>
            <Header />
            <TopNav />
            <div className="row">
                <div className="leftcolumn">
                    <AboutMe showProjects={recibirbutton} />
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
                                <div className='card-content'>
                                    <div className="card">
                                        <section className='item-center'>
                                            <h1 className='text-title'>No content available</h1>
                                            <p className='text'>Please create a new post</p>

                                        </section>

                                    </div>
                                </div>


                            )
                    }
                </div>
                <div className="rightcolumn">
                    <div className='card-content'>
                        <div className="card">
                            <h1 className='text-title'>New Post</h1>
                            <form >
                                <div className="row">
                                    <div className="col-25">
                                        <label className='text' htmlFor="fname">Post Title:</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="fname" name="firstname" value={title} placeholder="Your post title.." onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-25">
                                        <label className='text' htmlFor="lname">Post Author</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="lname" name="lastname" value={titleDescription} placeholder="Your full name.." onChange={(e) => setTitleDescription(e.target.value)} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-25">
                                        <label className='text' htmlFor="subject">Post Content</label>
                                    </div>
                                    <div className="col-75">
                                        <textarea id="subject" name="subject" placeholder="Write something.." value={text} onChange={(e) => setText(e.target.value)} />
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="form-button">
                                        <input type="submit" value="Create" onClick={handleOnClick} />
                                    </div>
                                </div>
                            </form>
                            {error && <p className='error'>{error}</p>}
                        </div>
                    </div>

                    <div className='card-content'>
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

                                        <h1 className='text-title'>No popular content available</h1>

                                    )


                            }

                        </div>
                    </div>
                    <div className='card-content'>
                        <div className="card">

                            <p></p>
                        </div>
                    </div>
                </div>
            </div >

            <div className="footer" ref={inputRef} tabIndex={-1} >

                <PrevProjects />
                <h2></h2>
            </div >
        </>
    )
}