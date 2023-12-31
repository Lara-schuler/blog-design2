import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
    const imagePath = "https://api-rest-post-diegocandido.herokuapp.com";
 
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetch(`https://api-rest-post-diegocandido.herokuapp.com/postagens`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
                console.log(data)
            });
    }, []);

    return (
        <Container>
            <Header />
            <Navbar />
            <h1>Posts</h1>
            <MovieList>
                {movies.map((movie, index) => {
                    return (
                        <Movie key={movie.index}>
                            <img
                                src={`${imagePath}${movie.thumbImage}`}
                                alt="{movie.title}"
                            />
                            <span>{movie.title}</span>
                            {/*`/movie/${index}` isso está correto?*/}
                            
                            <Link to={`/${index}`}>
                                <Btn>Detalhes</Btn>
                            </Link>
                        </Movie>
                    );
                })}
            </MovieList>
            <Footer />
        </Container>
    );
}

export default Home;

