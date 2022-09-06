import React from "react";
import styles from "./Menu.module.scss";

import home from "../../assets/icones/home-ativo.png";
import maisCurtidas from "../../assets/icones/mais-curtidas.png";
import maisVistas from "../../assets/icones/mais-vistas.png";
import novas from "../../assets/icones/novas.png";
import surpreendaMe from "../../assets/icones/surpreenda-me.png";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt="ícone do item" />
          <a href="/">Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVistas} alt="ícone do item" />
          <a href="/">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidas} alt="ícone do item" />
          <a href="/">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt="ícone do item" />
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreendaMe} alt="ícone do item" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
