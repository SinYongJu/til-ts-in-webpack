import * as React from 'react';
import { observer, inject } from 'mobx-react'
import Store from '../store';
import Wrapper from './wrapper/Wrapper';
import Button, { BUTTON_THEME_MAPPER } from './button/Button';
import styled from 'styled-components';

interface ICountTestProps {
    store?: Store
    className ?: string
}


const CountTContainer= styled(Wrapper)`
    padding: 20px;
    ${Button} {
        width: 50%;    
        height: 56px;
        box-sizing: border-box;
    }
`;


@inject('store')
@observer
class CountT extends React.Component <ICountTestProps>{
    render(){     
        const { children,store,...props} = this.props
            return (
                <CountTContainer className={this.props.className}>
                    <Button theme={BUTTON_THEME_MAPPER.BLUE} onClick={store.increase}>증가</Button>
                    <Button theme={BUTTON_THEME_MAPPER.BALCK} onClick={store.decarease}>감소</Button>
                </CountTContainer>
            );
        
    }
}
export default CountT
// styled(CountT)`
//     padding: 20px;
//     ${Button} {
//         width: 50%;    
//         height: 56px;
//         box-sizing: border-box;
//     }
// `;