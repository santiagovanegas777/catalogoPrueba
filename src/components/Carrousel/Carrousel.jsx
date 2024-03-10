//Importamos la librería de splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { useEffect, useState, useRef } from "react";

//Importamos intersection, el cual debe servir para que las fotos pasen automáticamente


import "../../styles/Carrousel/main.css"

const Carrousel = () => {

    const [estilos, setEstilos] = useState([]);

    const getDataAPI = async () => {
        const response =  await fetch('https://api-unas.vercel.app/estilos/');
        const res = await response.json();
        setEstilos(res);
    }

    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            const interval = setInterval(() => {
                ref.current.splide.go('>');
            }, 9000000);

            // Si necesitas detener el autoplay cuando el componente se desmonta,
            // puedes desactivar el intervalo aquí.
            return () => clearInterval(interval);
        }
    }, []);

    useEffect(() => {

        getDataAPI();
    }, []);

    const options = {
        type: "loop",
        perPage: 1,
        autoplay: "play",
        interval: 3000,
        pauseOnHover: false,
        rewind: true,
        rewindSpeed: 1500,
        arrows: false,
        intersection: {
            inView: {
                autoplay: true,
            },
            outView: {
                autoplay: true,
            },
        }
    }
    return (
        <>
            <div className="carrousel">

                <Splide ref={ref} tag="section" options={options} className="section_carrousel" >
                    {estilos.map((estilo, i) => {
                        console.log(estilo.estiloImg);
                        return (
                            
                            <SplideSlide key={i}>
                                <article className="destination_card">
                                    <img src={estilo.estiloImg} alt="estiloImagen" />
                                    <div className="destination_information">
                                      
                                        <span className="destination_hotel">{estilo.estiloName}</span>
                                    </div>
                                </article>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </div>
        </>
    )
}

export default Carrousel;