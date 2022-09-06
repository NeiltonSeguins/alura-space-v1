import { useState } from "react";
import fotos from "./fotos.json";
import styles from "./Galeria.module.scss";

import Tags from "../Tags";
import Cards from "./Cards";

export default function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((val) => val.tag))];

  const filtraFotos = (item) => {
    const novoItem = fotos.filter((foto) => {
      return foto.tag === item;
    });
    setItens(novoItem);
  };

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} />
      <Cards itens={itens} styles={styles} />
    </section>
  );
}
