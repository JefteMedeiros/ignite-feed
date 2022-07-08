import React, { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Avatar from "../Avatar";
import Comment from "../Comment";
import styles from "./index.module.css";

type author = {
  name: string;
  role: string;
  avatar: string;
};

type content = {
  type: string;
  content: string;
};

type post = {
  id?: number;
  content: content[];
  author: author;
  publishedAt: Date;
};

interface IProps {
  post: post;
}

const Post: React.FC<IProps> = ({ post }) => {
  const [comments, setComments] = useState<string[]>([]);
  const [commentContent, setCommentContent] = useState("");

  const deleteComment = (comment: string) => {
    const newCommentList = comments.filter(
      (commentContent) => commentContent !== comment
    );

    setComments(newCommentList);
  };

  const handleSetComment = (a: string) => {
    setCommentContent(a);
  };

  const handleAddComment = () => {
    event?.preventDefault();
    setComments([...comments, commentContent]);
    setCommentContent("");
  };

  const publishedDateFormat = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH'h'mm",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={post.author.avatar} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateRelativeToNow}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateFormat}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleAddComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={commentContent}
          onChange={(e) => handleSetComment(e.target.value)}
          required
          placeholder="Deixe um comentário"
        />

        <footer>
          <button disabled={!commentContent.length} type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              deleteComment={deleteComment}
              key={comment}
              comment={comment}
            />
          );
        })}
      </div>
    </article>
  );
};

export default Post;
