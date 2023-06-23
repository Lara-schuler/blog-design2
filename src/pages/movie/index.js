import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
//import Navbar from '../../components/Navbar';
//import Header from '../../components/Header';
//import Footer from '../../components/Footer';
import "./styles.css";

const Movie = () => {
  const { index } = useParams(); //` const { id } = useParams();` isso está correto ou ao invés do id ou deveria ser o index?
  const imagePath = "https://api-rest-post-diegocandido.herokuapp.com";

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://api-rest-post-diegocandido.herokuapp.com/postagem/${index}`)
      .then((response) => response.json())
      .then((json) => {
        setMovie(json);
        //const foundPost = data.find((key) => key.index === index);
        /*data.find((movie) => movie.index === index); */
        //setMovie(foundPost);

      })
      .catch((err) => { });
  }, [index]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav className="m-4">
        <h1>Detalhes</h1>
      </nav>
      <img
        className="img_movie mb-3"
        src={`${imagePath}${movie.thumbImage}`}
        alt="{movie.title}"
      />
      <div className="container">
        <h1>{movie.title}</h1>
        <h3>Data de lançamento: {movie.postDate}</h3>
        <div className="descricao">
          <h4>Descrição: </h4>
          <p className="movie-desc">{movie.description}</p>
        </div>
        <Link to="/">
          <button className="link_button m-4">Voltar</button>
        </Link>
      </div>
    </div>
  );
};

export default Movie;

/**
 * <div>
      <Header />
      <Navbar />
      <main>
      <h1>Detalhes</h1>
      <img
        className="img_movie"
        src={`${imagePath}${movie.thumbImage}`}
        alt={movie.title}
      />
      <div className="container">
        <h1>{movie.title}</h1>
        <h3>Data da postagem: {movie.postDate}</h3>
        <div className="descricao">
          <h4>Descrição: </h4>
          <p className="movie-desc">{movie.description}</p>
        </div>
        <Link to="/">
          <button className="link_button">Voltar</button>
        </Link>
      </div>
      </main>
      <Footer />
    </div>
 */

