import React from "react";
import style from "./Populares.module.scss";
import fotosPopulares from "./fotos-populares.json";

export default function Populares() {
  return (
    <aside className={style.populares}>
      <h2>Populares</h2>
      <ul className={style.populares__imagens}>
        {fotosPopulares.map((foto) => {
          return (
            <li key={foto.id}>
              <img src={foto.path} alt={foto.alt} />
            </li>
          );
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  );
}
