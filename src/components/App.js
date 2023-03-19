import React from 'react'
import MovieList from './MovieList'
import SearchBar from './SearchBar'


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
              overview: "When the Joker creates chaos in Gotham, Batman faces a great test of his abilities to fight injustice, both physically and psychologically.",
              imageURL: "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF1000,1000_QL80_.jpg"
            },
            {
                id: 4,
                name: "Tenet",  
                rating: 8.5,
                overview: "A former CIA agent manipulates time to prevent a future attack that threatens to destroy the present world.",
                imageURL: "https://tr.web.img3.acsta.net/pictures/20/08/28/14/59/2855138.jpg"
              },
              {
                id: 5,
                name: "Nitram",  
                rating: 7.2,
                overview: "Nitram is an intellectually disabled young adult who lives with his parents in Port Arthur, Australia. She likes to play tennis. ",
                imageURL: "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/nitram-2022/large_nitram-poster.jpeg"
              },
              {
                id: 6,
                name: "Inception",  
                rating: 9.6,
                overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind.",
                imageURL: "https://play-lh.googleusercontent.com/kSeBtvMBvS9P9jSwP-bVNmrH8yANJeKZrbxUIiw6zSOpRibxBn1IP7PEHrDeoIz0AmQPddbRPMEgh8KL8ohd"
              },
              {
                id: 7,
                name: "The Lord of the Rings",  
                rating: 9.3,
                overview: "The Lord of the Rings is a fantasy adventure about a hobbit named Frodo and his journey to destroy a powerful ring and defeat evil forces.",
                imageURL: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              },
              {
                id: 8,
                name: "Forrest Gump",  
                rating: 6.3,
                overview: "The movie follows the life of Forrest Gump, a simple man with a low IQ who unwittingly becomes a part of several important historical events.",
                imageURL: "https://tr.web.img4.acsta.net/pictures/bzp/01/10568.jpg"
              }
        ], 

        searchQuery: ""
    }

    // Delete Movie Function
    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )
        // this.setState({   İlk yöntemde, önceki durumun yerine tamamen yeni bir state nesnesi oluşturuluyor ve bunun ardından setState yöntemi çağrılıyor. Bu yöntem, sadece tek bir state değişikliği yapıldığında kullanılabilir ve önceki durumun kaydedilmesi gerektiğinde ekstra bellek kullanımına neden olabilir. Ayrıca, paralel olarak çalışan birden fazla setState işlevi çağrıldığında, önceki durumların üzerine yazarak kaybolmalarına neden olabilir. Bu nedenle, önceki duruma göre değişiklik yapmak gerektiğinde, ikinci yöntem kullanılmalıdır.
        //     movies: newMovieList
        // })

        this.setState(state => ({ /* İlk yöntemde, önceki durumun yerine tamamen yeni bir state nesnesi oluşturuluyor ve bunun ardından setState yöntemi çağrılıyor. Bu yöntem, sadece tek bir state değişikliği yapıldığında kullanılabilir ve önceki durumun kaydedilmesi gerektiğinde ekstra bellek kullanımına neden olabilir. Ayrıca, paralel olarak çalışan birden fazla setState işlevi çağrıldığında, önceki durumların üzerine yazarak kaybolmalarına neden olabilir. Bu nedenle, önceki duruma göre değişiklik yapmak gerektiğinde, ikinci yöntem kullanılmalıdır. */
            movies:  newMovieList
        }))
    }

    searchMovie = (event) => {
        // console.log(event.target.value); // buradaki event onChange'den geliyor.
        this.setState({searchQuery: event.target.value})
    }

    render(){

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.indexOf(this.state.searchQuery) !== -1
            }
        )
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <SearchBar searchMovieProp = {this.searchMovie} />
                    </div>
                </div>

                <MovieList
                    movies = {filteredMovies}
                    deleteMovieProp = {this.deleteMovie} />
            </div>
        )
    }
}

export default App

