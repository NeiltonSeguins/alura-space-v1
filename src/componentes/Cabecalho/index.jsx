import React from "react";
import logo from "./logo.png";
import search from "./search.png";
import style from "./Cabecalho.module.scss";

export default function Cabecalho() {
  return (
    <header className={style.cabecalho}>
      <img src={logo} alt="Logo da Alura Space" />
      <div className={style.cabecalho__container}>
        <input
          className={style.cabecalho__input}
          type="text"
          placeholder="O que você procura?"
        />
        <img src={search} alt="ícone de pesquisa representado por uma lupa" />
      </div>
    </header>
  );
}
