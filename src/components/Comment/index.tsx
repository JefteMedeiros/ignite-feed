import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import Avatar from "../Avatar";

import styles from "./index.module.css";

interface Props {
  author: string
  src: string;
}

const Comment: React.FC<Props> = ({author, src}) => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={src} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author}</strong>

              <time title="4 de Julho às 12h37" dateTime="2022-7-04 12:13:00">
                Cerca de 2h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, parabéns!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
