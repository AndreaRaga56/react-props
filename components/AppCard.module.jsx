import blogPosts from "../content"
import style from "./AppCard.module.css";

function AppCard() {
    return (
        <div className={style.card}>
            <div> <img className={style.immagine} src={blogPosts[1].image} alt="" /></div>
            <h3 className={style.titoloPost}>{blogPosts[1].title}</h3>
            <p className={style.paragrafo}>{blogPosts[1].content}</p>
            <div className={style.button}>LEGGI DI PIÙ</div>
        </div>
    )
}

export default AppCard