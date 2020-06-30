import * as React from 'react';
import Store from '../store';
import { observer, inject } from 'mobx-react'
import TitleH3 from './title/TitleH3';
import styled from 'styled-components';

interface CountProps{
    store ?: Store
}
const CountTitle = styled(TitleH3)`
    font-size: 48px;
    color: #555
`

@inject((store) => store)
@observer
class Count extends React.Component<CountProps>{
    render(){
        return (
            <CountTitle>
                {this.props.store.count}      
            </CountTitle>
        );
    }
};

export default Count;