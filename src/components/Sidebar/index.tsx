import React from "react";
import { PencilLine } from 'phosphor-react';
import styles from "./index.module.css";
import Avatar from "../Avatar";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <img 
        src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
        className={styles.cover}
        />

      <div className={styles.profile}>
        <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/87246224?v=4" />
        <strong>Jefté Medeiros</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;
