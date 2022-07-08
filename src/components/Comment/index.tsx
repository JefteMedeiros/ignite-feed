import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import Avatar from "../Avatar";

import styles from "./index.module.css";

interface IProps {
  comment: string;
}

const Comment: React.FC<IProps> = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/JefteMedeiros.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jefté Medeiros</strong>

              <time title="4 de Julho às 12h37" dateTime="2022-7-04 12:13:00">
                Cerca de 2h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
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
