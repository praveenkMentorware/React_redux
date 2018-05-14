import React,{ Component } from 'react';

class SeachBar extends Component{
    state={
        SearchValue:' '
    }

    handleInputChange =(event) =>{
        console.log(event.target.value);
        this.setState({
            SearchValue:event.target.value
        })
    }
    render (){
        return(
            <div>
                <input  onChange={this.handleInputChange} value={this.state.SearchValue}/>
            </div>
        );
    }
}

export default SeachBar;