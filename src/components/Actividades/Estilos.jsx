 import axios from 'axios';
import {useEffect, useState} from 'react';
 import { Link } from "react-router-dom";
 //import '../../styles/Actividades/Actividades.css';
//import ListEstilos from './ListEstilos';
import Card from './Card';
 import Pagination from '../Pagination/Pagination';
import '../../styles/Actividades/ListActividades.css'


const Estilos = () => {
  const [estilos, setEstilos] = useState([]);
  const [actualPage, setActualPage] = useState(1);
 
  

  const getDataAPI = async (actualPage)=>{
      const response = await axios(`https://api-unas.vercel.app/estilos?page=${actualPage}`);
     
      setEstilos(response.data.estilos);
       console.log(response.data.estilos);

       
  }

  const renderList = () => {
    return estilos.map((estilo) => {
        return (<li key={estilo._id} >
            <Link to={"/estilos/" + estilo._id}style={{ textDecoration: "none" }}>
                <Card itemm={estilo} className="article_activity" />
            </Link>
        </li>
        )
    })
}
useEffect(() => {
  getDataAPI(actualPage);
}, [actualPage])
//  se va a ejecutar cada vez que cambie la variable actualPage
return (
    <>
        
      
       
      
        <ul>
            {renderList()}
        </ul>
        <Pagination setActualPage={setActualPage} actualPage={actualPage} />
    </>
)

}


export default Estilos
