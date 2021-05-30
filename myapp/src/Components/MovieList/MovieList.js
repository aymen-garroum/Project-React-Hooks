import MovieCard from "../MovieCard/MovieCard"
import './MovieList.css'

function MovieList(props) {

    const tab = Object.values(props)

    return (
        <div className="div_liste">
            {tab.map((el,index)=><MovieCard key={index} {...el}/>)}
        </div>
    )
}

export default MovieList
