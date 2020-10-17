import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        // console.log(this.props);
        // console.log(location.state);
        if(location.state === undefined){
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if(location.state){
            return (
                <div className="detail__container">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <div className="detail__info">
                        <h1>{location.state.title}</h1>
                        <span className="detail__year">{location.state.year}</span>
                        <ul className="detail__genre">
                            {location.state.genres.map((genre, index) =>
                                <li key={index} className="detail__genre-item">
                                    {genre}
                                </li>
                            )}
                        </ul>
                        <p className="detail__desc">
                            {location.state.summary}
                        </p>
                    </div>
                </div>

            )
        } else {
            return null;
        }
        // return(
        //     <span>{location.state.title}</span>
        // )
    }
}

export default Detail;