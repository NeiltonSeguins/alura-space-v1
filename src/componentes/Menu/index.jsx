import React from "react";
import style from "./Menu.module.scss";

import home from "../../assets/icones/home-ativo.png";
import maisCurtidas from "../../assets/icones/mais-curtidas.png";
import maisVistas from "../../assets/icones/mais-vistas.png";
import novas from "../../assets/icones/novas.png";
import surpreendaMe from "../../assets/icones/surpreenda-me.png";

export default function Menu() {
  return (
    <nav className={style.menu}>
      <ul className={style.menu__lista}>
        <li className={style.menu__item}>
          <img src={home} alt="ícone do item Home" />
          <a href="/">Início</a>
        </li>
        <li className={style.menu__item}>
          <img src={maisVistas} alt="ícone do item fotos mais vistas" />
          <a href="/">Mais vistas</a>
        </li>
        <li className={style.menu__item}>
          <img src={maisCurtidas} alt="ícone do item de fotos mais curtidas" />
          <a href="/">Mais curtidas</a>
        </li>
        <li className={style.menu__item}>
          <img src={novas} alt="ícone do item de fotos Novas" />
          <a href="/">Novas</a>
        </li>
        <li className={style.menu__item}>
          <img src={surpreendaMe} alt="ícone do item de Surpreenda-me" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
