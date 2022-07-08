import React, { ImgHTMLAttributes } from "react";
import styles from "./index.module.css";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder: boolean;
}

const Avatar: React.FC<Props> = ({hasBorder, ...props}) => {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...props} />
  );
};

export default Avatar;
