import NavBar from './components/Navbar';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostView from './components/PostView';
import NotFoundPage from './components/404Page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <NewPost />
          </Route>
          <Route exact path="/post-view/:id">
            <PostView />
          </Route>
          <Route exact path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div> 
    </div>
    </Router>
  );
}

export default App;
