import React from 'react';
// import SearchBar from './components/Header';
import youtube from './api/api';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";

import './App.css'
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import SearchPage from './SearchPage'
import LikedVideos from './LikedVideos';
import Trending from './Trending';
import Subscription from './Subscription';
import Library from './Library';
import History from './History';
import SearchBar from '../src/components/Searchbar';
import WatchLater from './watchLater';
import YourChannel from './YourChannel';
import RecommendedVideo from './RecommendedVideo';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
   handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }
    render() {
        return (
      <Router>

      <SearchBar handleFormSubmit={this.handleSubmit}/>

        <Switch>


         <Route path='/YourChannel'>
            <div className="app__page">
            <Sidebar/>
            <YourChannel/>
            
            </div>
            </Route>

         <Route path='/WatchLater'>
            <div className="app__page">
            <Sidebar/>
            <WatchLater/>
            </div>
            </Route>

         <Route path='/History'>
            <div className="app__page">
            <Sidebar/>
            <History/>
            </div>
            </Route>

         <Route path='/Library'>
            <div className="app__page">
            <Sidebar/>
            <Library/>
            </div>
            </Route>

            <Route path='/likedVideos'>
            <div className="app__page">
            <Sidebar/>
            <LikedVideos/>
            </div>
            </Route>

            <Route path='/Subscriptions'>
            <div className="app__page">
            <Sidebar/>
            <Subscription/>
            </div>
            </Route>
         
            <Route path='/Trending'>
            <div className="app__page">
            <Sidebar/>
            <Trending/>
            </div>
            </Route>
         
            <Route path='/youtube-project'>
            <div className="app__page">
            <Sidebar/>
            <RecommendedVideo/>
            </div>
            </Route>

            <Route path='/Home'>
            <div className="app__page">
            <Sidebar/>
            <RecommendedVideo/>
            </div>
            </Route>
            
            <Route path='/Watch'>
            <div className="app__page">
            <VideoDetail video={this.state.selectedVideo}/>
           <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />

          </div>
            </Route>


            <Route path="/search">
              <div className="app__page">
              <div className="eleven wide column">
            <Sidebar/>
            {/* <VideoDetail video={this.state.selectedVideo}/> */}
          </div>
          <div className="five wide column" style={{width:'100%'}}>
            <div className="filter">
            <p><TuneOutlinedIcon/>Filter</p> 
            </div>
            <hr/>
           <Link to="/Watch" style={{textDecoration:'none',color:'#676767'}}>
           <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} 
            style={{marginTop:'25px'}}/>
            </Link>

              </div>
              </div>
              </Route>
        
             
            </Switch>
      </Router>

        )
        
    }
}

export default App;
