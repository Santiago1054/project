import react, { useState } from 'react'
import '../Content.css'
export function Card({ Title, TitleDescription, Text }) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const handleOnLike = () => {
        console.log("Liked");
        setLikes(likes + 1);
    }
    const handleOnDislike = () => {
        console.log("Disliked");
        setDislikes(dislikes + 1);
    }
    return (
        <>
            <div className="card">

                <h1 className='text-title'>{Title}</h1>
                <h5 className='text'>{TitleDescription}</h5>

                <p className='text' >{Text}</p>


                <button class="button" onClick={handleOnLike}>{`${likes} 👍`}</button>
                <button class="button button3" onClick={handleOnDislike}>{`${dislikes} 👎`}</button>
            </div>

        </>
    )

}