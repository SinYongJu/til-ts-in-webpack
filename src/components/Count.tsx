import * as React from 'react';
import Store from '../store';
import { observer, inject } from 'mobx-react'
import TitleH3 from './title/TitleH3';

interface CountProps{
    store ?: Store
}

@inject((store) => store)
@observer
class Count extends React.Component<CountProps>{
    render(){
        return (
            <TitleH3>
                {this.props.store.count}      
            </TitleH3>
        );
    }
};

export default Count;