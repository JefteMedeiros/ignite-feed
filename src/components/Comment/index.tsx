import { ThumbsUp, Trash } from "phosphor-react";
import React, { useState } from "react";
import Avatar from "../Avatar";

import styles from "./index.module.css";

interface IProps {
  comment: string;
  deleteComment: (comment: string) => void;
}

const Comment: React.FC<IProps> = ({ comment, deleteComment }) => {
  const [likeCount, setLikeCount] = useState(0)

  const handleSetLikeCount = () => {
    setLikeCount((state) => {
      return state + 1
    })
  }

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

            <button onClick={() => deleteComment(comment)} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button onClick={handleSetLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
