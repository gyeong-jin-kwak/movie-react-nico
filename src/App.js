import React from "react";
import axios from "axios";
import Movie from "./Movies";

class app extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");
        this.setState({ movies, isLoading: false })
        // console.log(movies)
    }
    //https://yts.mx/api/v2/list_movies.json
    //https://yts-proxy.now.sh/list_movies.json #1 노마드 err

    componentDidMount() {
        this.getMovies();
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ isLoading: false })
    //     }, 3000)
    // }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <div>{isLoading ? 'loading...' : movies.map(movie => {
                console.log(movie);
                return <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                        />
            })}</div>
        );
    }
}

export default app;

