import React, { Component } from "react";

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerm:''
        }
    }

    render(){
        return (
            <div className="button_box2">
                <form className="form-wrapper-2 cf">
                    <input
                        value={this.state.searchTerm} 
                        onChange={event => this.onInputChange(event.target.value)} type="text" placeholder="Search here..." required>
                    </input>
                    <button
                        type="submit">Search
                    </button>
                </form>
            </div>
        );
    }

    onInputChange(searchTerm){
        this.setState({searchTerm});
        this.props.onSearchTermChange(searchTerm);
    }

    onClickEvent(event){
        
    }
}

// const SearchBar = props => {
//   return (
//     <div className="button_box2">
//         <form className="form-wrapper-2 cf">
//             <input type="text" placeholder="Search here..." required></input>
//             <button type="submit">Search</button>
//         </form>
//     </div>
//   );
// };

export default SearchBar;