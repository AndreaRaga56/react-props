import style from "./AppCard.module.css";

// eslint-disable-next-line react/prop-types
function AppCard({id, title, image, content, tags}) {

    let tagsElaborati = tags.map((curTag, i)=>{
        
        return <span key={i} className={curTag}>{curTag} </span>
    })
    
    console.log(style.html)
    

    return (
        <div className={style.card}>
            <div> <img className={style.immagine} src={image} alt="" /></div>
            <h3 className={style.titoloPost}>{title}</h3>
            <p className={style.paragrafo}>{content}</p>
            <p className={style.paragrafo}></p>
            <div className={style.tags}>{tagsElaborati}</div>            
            <div className={style.button}>LEGGI DI PIÙ</div>
        </div>
    )
}

export default AppCard