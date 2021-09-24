import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        term: ' '
    };

    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    

    render() {
        return (
            <div className='search-bar segment'>
                <form onSubmit={this.handleSubmit} className='user form'>
                    <div className='field'>
                        <label htmlFor="video-search"></label>
                        <input className="search" onChange={this.handleChange} placeholder="Enter an Artist or Song" autoComplete="off" name='video-search' type="text" value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
    
}


export default SearchBar

