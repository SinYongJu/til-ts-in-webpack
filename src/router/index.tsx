import * as React from 'react';
import { BrowserRouter as Router, Route, Switch,Link, Redirect } from 'react-router-dom';

import Header from '../components/layout/Header';
import HitoryBack from '../components/layout/HitoryBack';

import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const AppRouter:React.FC = ()=>{
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={(props)=><Header {...props}>hoho</Header>}/>
                <Route render={()=> <HitoryBack/>} />
            </Switch>
            <Switch>
                <Route exact path="/" component={()=><Home/>}/>
                <Route path="/login" component={()=><Login>Login</Login>}/>
                <Route path="/about" component={()=><About/>}/>
                <Route render={(props)=>{
                    return <Redirect to={
                        {
                            state : {
                                from : props.location 
                            }
                        }
                    } />
                }}/>
                <Route component={()=><NotFound/>}/>
            </Switch>
            {/* <footer>
                <h2>footer</h2>
            </footer> */}
        </Router> 
    );
}

export default AppRouter;