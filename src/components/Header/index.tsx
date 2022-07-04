import React from 'react';
import styles from './index.module.css';

import IgniteLogo from '../../img/ignite-logo.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <strong>Ignite Feed</strong>
        <span>By: Jefté Medeiros</span>
      </div>
      <img src={IgniteLogo} alt="Logotipo do ignite" />
    </header>
  );
}

export default Header;