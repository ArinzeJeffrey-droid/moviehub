import React from "react";
//import Genres from './genres'
import Nav from "../../components/nav/nav.component";
import "./movie-details.styles.scss";
import { ReactComponent as PlayIcon } from "../../assets/images/play3.svg";
import ReactStars from 'react-rating-stars-component';
import Footer from '../../components/footer/footer.component';
import axios from 'axios';
import { API_KEY } from "../../redux/actions/index"


class MovieDetails extends React.Component {
  state = {
    movie:{}
  }
  fetchMovieDetails = async () => {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/${this.props.match.params.type}/${this.props.match.params.id}?api_key=1a0cb313ebb158682c24ac7abe169c88&language=en-US`
    );
    this.setState({ movie: movie.data })
  }
  componentDidMount() {
    this.fetchMovieDetails()
  }
  movieTrailer = async () => {
    const movie_id = await axios.get(`https://api.themoviedb.org/3/${this.props.match.params.type}/${this.state.movie.id}/videos?api_key=${API_KEY}&language=en-US`)
    window.location.href = `https://www.youtube.com/watch?v=${movie_id.data.results[0].key}`
  }
  render() {
    const movie = this.state.movie
    return (
      <div>
        <Nav />
        <div className="movie">
          <div className="movie__img-container">
            <div className="img-overlay">
              <button className="movie__play-button" onClick={this.movieTrailer}>
                <PlayIcon className="movie__play-icon" /> Play
              </button>
            </div>

            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={`cover for movie title`}
              className="movie__img"
            />
          </div>
          <div className="movie-details">
            <h2 className="movie__title">{movie.title || movie.name}</h2>
            <div className="split-column">
              <p className="movie__overview">{movie.overview}</p>
              <div>
                <span>Ratings:</span>
                <ReactStars
                  count={5}
                  value={3}
                  size={24}
                  activeColor="#ffd700"
                  isHalf={true}
                  edit={false}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                />
                <p className="movie__genres">
                  <span>Genres:</span>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default MovieDetails;
