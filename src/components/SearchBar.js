import React from 'react'

class SearchBar extends React.Component{

    handleFormSubmit = (event) => {
        event.preventDefault()

    }
    render() {

        return(
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-row mb-5'>
                    <div className='col-12'>
                        <input onChange={this.props.searchMovieProp} // onChange burada yapılan işlemle ilgili bir event nesnesi döndürür.
                        type="text"
                        className='form-control mt-3'
                        placeholder='Search a movie'
                        />
                    </div>  
                </div>
            </form>
        )

    }
}

export default SearchBar;

