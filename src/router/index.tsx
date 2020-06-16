import * as React from 'react';
import { BrowserRouter as Router, Route, Switch,Link, Redirect } from 'react-router-dom';

import Header from '../components/layout/Header';

import Home from "../components/Home";
import Login from "../components/Login";
import About from "../components/About";
import NotFound from "../components/NotFound";

const AppRouter:React.FC = ()=>{
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={(props)=><Header {...props}/>}/>
                <Route render={()=> <Link to="/">go home</Link>} />
            </Switch>
            <Switch>
                <Route exact path="/" component={()=><Home/>}/>
                <Route path="/login" component={()=><Login/>}/>
                <Route path="/about" component={()=><About/>}/>
                <Route component={()=><Redirect to="/" />}/>
                <Route component={()=><NotFound/>}/>
            </Switch>
            <footer>
                <h2>footer</h2>
            </footer>
        </Router> 
    );
}

export default AppRouter;