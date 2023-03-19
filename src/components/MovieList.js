import React from 'react'

const MovieList = (props) => { // Stateless functional component'e çevirdik.

        return(

            <div className='row'>

                {props.movies.map((movie) => ( // Bu örnekteki arrow function, JSX içinde kullanılıyor ve birçok JSX elementi döndürüyor. Bir arrow function'un bir JSX elementi döndürmesi için, JSX'in parantez içinde olması gerekiyor. 
                    
                    <div className='col-lg-3' key={movie.id}>
                        <div className='card mt-3'>
                            <img src={movie.imageURL} className='card-img-top' alt='Sample Movie' height="400" />
                            <div className='card-body'>
                                <h5 className='card-title'>{movie.name}</h5>
                                <p className='card-text'>{movie.overview}</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button type='button' onClick={() => props.deleteMovieProp(movie)} className='btn btn-md btn-outline-danger'>Delete</button>  {/* onclick içine event handler yazdık */}
                                    <h2><span className='badge bg-info'>{movie.rating}</span></h2> {/* Event handler, bir programlama dilinde bir olay (event) gerçekleştiğinde çalıştırılacak olan kod bloğu veya işlevdir. */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        )
    
}

export default MovieList;