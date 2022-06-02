
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Create } from './components/Create';
import { BlogDetails } from './components/BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { NotFound } from './components/NotFound';

export const App = () => {
  const URL = "http://localhost:8000/blogs/";  

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home
                URL={URL} />
            </Route>
            <Route path="/create">
              <Create
                URL={URL} />
            </Route>            
            <Route path="/blogs/:id">
              <BlogDetails
                URL={URL} />
            </Route>  
            <Route path="*">
              <NotFound />
            </Route>          
          </Switch>
        </div>
      </div>
    </Router>
  );
}
