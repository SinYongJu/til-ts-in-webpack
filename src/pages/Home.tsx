import * as React from 'react';
import styled from 'styled-components';
import TitleH2 from '../components/title/TitleH2';
import TitleH3 from '../components/title/TitleH3';
import BodyTemplate from '../template/BodyTemplate';
import Wrapper from '../components/wrapper/Wrapper';


const Home:React.FunctionComponent = ({ children,...props}) => {
    return (
        <BodyTemplate {...props}>
            <TitleH2>HOME</TitleH2>
            <Wrapper width="100%" height="740" maxHeight="400">
                <TitleH3>Contents Title</TitleH3>
            </Wrapper>
        </BodyTemplate>
    );
};

export default styled(Home)``;