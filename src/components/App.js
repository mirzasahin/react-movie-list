import React from 'react'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
import axios from 'axios'

class App extends React.Component{

    state = { // state bir obje olduğu için içerisine yazdığımız movies property olarak gelmeli yani : kullanılmalı.
        movies: [], 
        searchQuery: ""
    }

    async componentDidMount(){
      const response = await axios("http://localhost:3002/movies") // API işlemleri componentDidMount içinde yapılmalı
      console.log(response);
      this.setState({movies: response.data})
    }

      // DELETE FUNCTION - AXIOS API
    deleteMovie = async (movie) => { 

        axios.delete(`http://localhost:3002/movies/${movie.id}`)
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )

        this.setState(state => ({ /* İlk yöntemde, önceki durumun yerine tamamen yeni bir state nesnesi oluşturuluyor ve bunun ardından setState yöntemi çağrılıyor. Bu yöntem, sadece tek bir state değişikliği yapıldığında kullanılabilir ve önceki durumun kaydedilmesi gerektiğinde ekstra bellek kullanımına neden olabilir. Ayrıca, paralel olarak çalışan birden fazla setState işlevi çağrıldığında, önceki durumların üzerine yazarak kaybolmalarına neden olabilir. Bu nedenle, önceki duruma göre değişiklik yapmak gerektiğinde, ikinci yöntem kullanılmalıdır. */
            movies:  newMovieList
        }))
    }

    searchMovie = (event) => { // buradaki event onChange'den döndürülen event nesnesidir.
        // console.log(event.target.value); // buradaki event onChange'den geliyor.
        this.setState({searchQuery: event.target.value})
    }

    render(){

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
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

