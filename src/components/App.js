import React from 'react'
import MovieList from './MovieList'


class App extends React.Component{

    state = { // state bir obje olduğu için içerisine yazdığımız movies property olarak gelmeli yani : kullanılmalı.
        movies: [
            {
              id: 1,
              name: "The Shawshank Redemption",
              rating: 9.3,
              overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
              imageURL: "https://shatpod.com/movies/wp-content/uploads/2017/03/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg"
            },
            {
              id: 2,
              name: "The Godfather",
              rating: 9.2,
              overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
              imageURL: "https://hediyeposter.com/sites/default/files/poster_resimleri/thegodfather.jpg"
            },
            {
              id: 3,
              name: "The Dark Knight",
              rating: 9.1,
              overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
              imageURL: "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF1000,1000_QL80_.jpg"
            },
            {
                id: 4,
                name: "Tenet",
                rating: 8.5,
                overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                imageURL: "https://tr.web.img3.acsta.net/pictures/20/08/28/14/59/2855138.jpg"
              }
        ]
    }

    // Delete Movie Function
    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )
        this.setState({
            movies: newMovieList
        })
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                    </div>
                </div>

                <MovieList
                    movies = {this.state.movies}
                    deleteMovieProp = {this.deleteMovie} />
            </div>
        )
    }
}

export default App

