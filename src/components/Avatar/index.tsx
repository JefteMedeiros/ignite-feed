import React from "react";
import styles from "./index.module.css";

interface Props {
  src: string;
  hasBorder: boolean;
}

const Avatar: React.FC<Props> = ({src, hasBorder}) => {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt="" />
  );
};

export default Avatar;
