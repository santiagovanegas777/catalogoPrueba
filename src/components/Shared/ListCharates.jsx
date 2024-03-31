import { Link } from 'react-router-dom';
import '../../styles/Actividades/ListActividades.css';


function ListCharacter({ characters }) {

    const renderCharacters = () => {
        return characters.map((char) => <article key={char._id} className="actividad">
        <Link to={"/estilos/" + char._id} style={{ textDecoration: "none" }}>
        <div className="actividad-imageContainer">
            <img src={char.estiloImg} alt={char.estiloName} className="actividad-image" />
            </div>
            <div className="actividad-info">
            <h3 className="actividad-name">{char.estiloName}</h3>
            </div>
            </Link>
        </article>)
    }

    return (
        <section>
            {renderCharacters()}
        </section>
    )
}
export default ListCharacter