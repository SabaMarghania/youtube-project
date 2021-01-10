import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideo from './RecommendedVideo';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import SearchPage from './SearchPage';
import Trending from './Trending';
import Subscription from './Subscription';
import LikedVideos from './LikedVideos';
import Library from './Library';
import History from './History';
import WatchLater from './watchLater';
import YourChannel from './YourChannel';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/search/:searchTerm">
          <div className="app__page">
          <Sidebar/>
          <SearchPage/>
         </div>
         </Route>
          
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

            <Route path="/">
              <div className="app__page">
              <Sidebar/>
              <RecommendedVideo/>
              </div>
              </Route>
           
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
