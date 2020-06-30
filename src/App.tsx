import * as React from 'react';
import { Provider } from 'mobx-react'
import Router from './router';
import Store from './store';


class App extends React.Component {
    private rootStore =  new Store()

    render(){
        return (
            <Provider store={this.rootStore}>
                <Router/>
            </Provider>
        );
    }
}


export default App;