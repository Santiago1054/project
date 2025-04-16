import react, { useState } from 'react'
import '../Content.css'
export function Card({ Title, TitleDescription, Text, onEnviarValor, onDislikes, id }) {
    //declare the state variables
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    //Handle the like and dislike events
    const handleOnLike = () => {
        //console.log("Liked");
        //Increment the likes by 1
        setLikes(likes + 1);

        // Call the onEnviarValor function with the likes value
        onEnviarValor(likes);

        onDislikes(id);
    }
    const handleOnDislike = () => {
        console.log("Disliked");
        setDislikes(dislikes + 1);

    }
    return (
        <>
            <div className="card-content">
                <div className='card'>
                    <h1 className='text-title'>{Title}</h1>
                    <h5 className='text'>{'By ' + TitleDescription}</h5>
                    <p className='text' >{Text}</p>
                    {onEnviarValor &&

                        <>
                            <div className='item-center'>
                                <button className="button" onClick={handleOnLike}>{`${likes} 👍`}</button>
                                <button className="button button3" onClick={handleOnDislike}>{`${dislikes} 👎`}</button>
                            </div>
                        </>

                    }
                </div>
            </div>

        </>
    )

}