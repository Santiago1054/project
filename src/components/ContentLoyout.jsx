
import React, { useEffect, useRef } from 'react'

import '../Content.css'
import { Header } from './Header.jsx'
import { TopNav } from './TopNav.jsx'
import { Card } from './Card.jsx'
import { Constants } from '../constants/Constants.js'
import { AboutMe } from './AboutMe.jsx'
import { PrevProjects } from './PrevProjects.jsx'
import { SkillSection } from './SkillSection.jsx'
import { Education } from './Education.jsx'
import { PostSection } from './PostSection.jsx'
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
                    <PrevProjects />


                </div>






                <div className="rightcolumn">
                    <AboutMe showProjects={recibirbutton} />
                    <SkillSection />
                    <Education />



                </div>
            </div >

            <div className="footer" ref={inputRef} tabIndex={1} >

                <PostSection />
                <h2></h2>
            </div >
        </>
    )
}