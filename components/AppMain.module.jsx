import AppCard from "./AppCard.module";
import style from "./AppMain.module.css";
import blogPosts from "../content"


function AppMain() {
  return (
    <section className={style.main}>
      <div className={style.container}>
        <h1 className={style.titolo}>IL MIO BLOG</h1>
        <AppCard />
      </div>
    </section>
  )
}

export default AppMain