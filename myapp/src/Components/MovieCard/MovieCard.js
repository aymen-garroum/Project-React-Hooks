import './MovieCard.css'
import Rating from '../Rating/Rating'

function MovieCard(props) {

    return (
        <div className="div_card">
            <img src={props.path} alt="NO POSTER"/>
            <h3 className="titre">Titre : {props.title}</h3>
            <p><strong>Description : </strong> {props.description}</p>
            <div className="div_rating_card"><Rating key={props.title} rating={props.rating}/></div>
        </div>
    )
}

export default MovieCard

