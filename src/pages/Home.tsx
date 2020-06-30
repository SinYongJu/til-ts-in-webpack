import * as React from 'react';
import styled from 'styled-components';
import TitleH2 from '../components/title/TitleH2';
import TitleH3 from '../components/title/TitleH3';
import BodyTemplate from '../template/BodyTemplate';
import Wrapper from '../components/wrapper/Wrapper';
import { observer, inject } from 'mobx-react'
import Store from '../store';
import Button, { BUTTON_THEME_MAPPER } from '../components/button/Button';
import Count from '../components/Count';
import CountT from '../components/CountT';
import Timer from '../components/Timer';

interface IHomeProps {
    store?: Store
}

class Home extends React.Component <IHomeProps>{
    constructor (props : IHomeProps){
        super(props)
    }
    render(){     
        const { children,store,...props} = this.props
            return (
                <BodyTemplate {...props}>
                    <TitleH2>HOME</TitleH2>
                    <Wrapper width="100%" height="740" maxHeight="400">
                        <TitleH3>Contents Title</TitleH3>
                    </Wrapper>
                    <Count/>
                    <Count/>
                    <Count/>
                    <CountT/>
                    <Timer/>
                </BodyTemplate>
            );
        
    }
}

export default styled(Home)``;