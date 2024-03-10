import {useEffect, useState} from 'react';
  // import '../../styles/Actividades/Actividades.css';
import ListEstilos from './ListEstilos';


const Estilos = () => {
  const [estilos, setEstilos] = useState([]);

  const getDataAPI = async ()=>{
      const response = await fetch('https://api-unas.vercel.app/estilos/');
      const res = await response.json();
      setEstilos(res);
  }
  useEffect(() => {
    getDataAPI();
  },[]);

  return (
    <div className='section_estilos'>
      <ListEstilos estilos = {estilos} />
    </div>
  )
}

export default Estilos