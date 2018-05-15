import React ,{ Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail';

const API_KEY="";



class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos : [],
            selectedVideo:null
        }
        YTSearch({ key : API_KEY ,term : 'surfboards'} , ( data ) =>{
            console.log( data );
            this.setState({ 
                videos : data,
                selectedVideo:data[0]
            
            });
        });
        
    }


    render(){
        return(
            <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList  
            listval={this.state.videos}
            
            OnVideoClick = {(selectedVideo)=>{this.setState({selectedVideo:selectedVideo})}}
            />
        </div>
        );
    }
}


ReactDOM.render(<App/>,document.querySelector('.container'));
