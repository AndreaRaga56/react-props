/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import style from "./AppCard.module.css";

function AppCard({ id, title, image, content, tags }) {

    let tagsElaborati = tags.map((curTag, i) => {
        return <span key={i} className={curTag}>{curTag} </span>
    })

    console.log(style.html)

    return (
        <div className={style.card}>
            {image ? <div> <img className={style.immagine} src={image} alt="" /></div> : <div> <img className={style.immagine} src="https://placehold.co/600x400" alt="" /></div>}
            <h3 className={style.titoloPost}>{title}</h3>
            <p className={style.paragrafo}>{content}</p>
            <div className={style.tags}>{tagsElaborati}</div>
            <div className={style.button}>LEGGI DI PIÙ</div>
        </div>
    )
}

export default AppCard