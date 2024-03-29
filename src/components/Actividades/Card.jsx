import '../../styles/Actividades/ListActividades.css';

function Card({ itemm }) {
    return (
        <article className="actividad">
        <div className="actividad-imageContainer">
            <img src={itemm.estiloImg} alt="estilo" className="actividad-image" />
            </div>

            <div className="actividad-info">
            <h3 className="actividad-name">
            {itemm.estiloName}</h3>
            </div>
        </article>
    )

}
export default Card;