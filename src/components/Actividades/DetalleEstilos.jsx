import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import '../../styles/Actividades/DetalleActividades.css';

const DetalleEstilos = () => {
    
    const { idEstilo } = useParams();
    const [estilo, setEstilo] = useState(undefined);
  
    const getDataAPI = async ( ) => {
  
      // const findDestination = await axios.get(`https://api-node-viajes.vercel.app/destinations/id/${idactividad}`);
      const response = await fetch(`https://api-unas.vercel.app/estilos/id/${idEstilo}`);
      const findEstilo = await response.json();
  
      console.log(findEstilo[0]);
      setEstilo(findEstilo[0]);
    };
  
    useEffect(() => {
      getDataAPI();
    },[]);

    if(estilo){
      return (
        <>
      <div className="actividad-imageContainerDetail">
            <img
              src={estilo.estiloImg}
              alt={estilo.estiloPlace}
              className="actividad-image"
            />
          </div>
  
          <div className="actividad-info">
            <h2 className="actividad-name">
              {estilo.estiloName} 
            </h2>
         
            <p className="actividad-p2">Precio:{estilo.estiloPrice}€</p>
          </div> 
            
        </>
      );
  
    }
    
  
  
  
  };
export default DetalleEstilos