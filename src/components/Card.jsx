import '../Content.css'
export function Card({ Title, TitleDescription, Image, Text, Text2 }) {
    return (
        <>
            <div className="card">
                <h2>{Title}</h2>
                <h5>{TitleDescription}</h5>
                <div className="fakeimg"><img src={Image} alt="Image" /></div>
                <p>{Text}</p>
                <p>{Text2}</p>
            </div>

        </>
    )
}