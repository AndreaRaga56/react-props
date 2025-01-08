import AppCard from "./AppCard.module";
import style from "./AppMain.module.css";
import blogPosts from "../content"


function AppMain() {

  const posts = blogPosts.map((CurCard, i) => {
    if (CurCard.published) {
      return (
        <AppCard
          key={i}
          title={CurCard.title}
          image={CurCard.image}
          content={CurCard.content}
          tags={CurCard.tags}
          id={CurCard.id}
        />
      );
    }
  });

  return (
    <section className={style.main}>
      <div className={style.container}>
        <h1 className={style.titolo}>IL MIO BLOG</h1>
        <div className={style.flex}>
          {posts}
        </div>       
      </div>
    </section>
  )
}

export default AppMain