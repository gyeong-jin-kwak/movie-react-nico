import React from 'react';
import axios from "axios";


class app extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }


    getMovies = async () => {
        const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
        console.log(movies)
    }

    componentDidMount() {
        this.getMovies();
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ isLoading: false })
    //     }, 3000)
    // }

    render() {
        const { isLoading } = this.state;
        return (
            <div>{ isLoading ? 'loading...' : 'we are ready' }</div>
        );
    }
}

export default app;

