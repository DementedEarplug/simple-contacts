import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import Home from './components/pages/Home'
import About from './components/pages/About'

const App = () => {
  return (
    <Router>
      <Fragment className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
