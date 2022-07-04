import React from "react";
import Avatar from "../Avatar";
import Comment from "../Comment";
import styles from "./index.module.css";

interface Props {
  src: string;
  author: string;
  role: string;
}

const Post: React.FC<Props> = ({src, author, role}) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={src}/>
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time title="4 de Julho às 12h37" dateTime="2022-7-04 12:13:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#"> jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment src="https://avatars.githubusercontent.com/u/87246224?v=4" author="Samuel Luiz" />
        <Comment src="https://pps.whatsapp.net/v/t61.24694-24/267701331_768933000717359_7386067221170486321_n.jpg?ccb=11-4&oh=01_AVymHjrCVsX1liJXHbHmwcNnw9VHRwkBQP-zuIRuLxTuZg&oe=62D311F9" author="Pedro Lucas" />
      </div>
    </article>
  );
};

export default Post;
