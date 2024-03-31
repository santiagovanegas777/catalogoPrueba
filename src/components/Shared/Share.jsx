import { useEffect, useState } from "react"




const Imput = () => {

    const [names, setNames] = useState([]);

    const handleInput =(ev)=>{
      console.log(ev.target.value);
   
      setNames(ev.target.value);
       
         }
    
    const getDataApiInput = async (names) =>{
     const res = await fetch (`https://api-unas.vercel.app/estilos/estiloName/${names}`);
        
       
        const  resJson = await res.json();

        setNames(resJson[0]);
        console.log(resJson[0])

    };

  
       

    useEffect(()=>{
         getDataApiInput(names);
    },[names]);

   
   




  return(<>
<input onChange={handleInput} />

   </>) 
   }



export default Imput
