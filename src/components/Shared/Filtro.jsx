import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
//  import Card from "../Actividades/Card";
import ListCharacter from "./ListCharates";
import "../../styles/Actividades/ListActividades.css";

const Filtro = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("combinados");

  const getDataApi = async (name) => {
    const res = await fetch(
      `https://api-unas.vercel.app/estilos/estiloName/${name}`
    );

    const resJson = await res.json();
    setCharacters(resJson);
    console.log(resJson);
  };

  useEffect(() => {
    getDataApi(name);
  }, [name]);

  return (
    <>
      <div>
        <select name="" id="" onChange={(ev) => setName(ev.target.value)}>
          <option value="combinados">combinados</option>
          <option value="zapatos">zapatos</option>
          <option value="prueba">prueba</option>
          <option value="pajaros">pajaros</option>
        </select>
      </div>
      <div>
        <ListCharacter
          characters={characters}
          className="article_activity"
        ></ListCharacter>
      </div>
    </>
  );
};

export default Filtro;
