

function Card({ title, content, imgURL, tag, tag2 }) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={imgURL} alt="" />
            <p>{content}</p>
            <span>{tag}</span>
            <span>{tag2 ? tag2 : "css"}</span>
        </div>
    )
}

export default Card;