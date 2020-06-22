import * as React from 'react';
import styled from 'styled-components';


interface IWrapper {
   maxWidth?: string
   maxHeight?: string
   width?: string
   height?: string
}
const Wrapper =  styled.div<IWrapper>`
   margin: 0 auto;
   width: ${props => props.width ? props.width : '720px'};
   height: ${props => props.height ? props.height : 'auto'};
   max-width: ${props => props.maxWidth ? props.maxWidth : '720px'};
   max-height: ${props => props.maxHeight ? props.maxHeight : 'auto'};
`

const HomeTitle = styled.h2`
    font-size: 3em;
    line-height: 1.5em;
    text-transform: uppercase;
`

const Home:React.FC = () => {
    return (
        <Wrapper>
            <HomeTitle>HOME</HomeTitle>
            <Wrapper height={"740px"} maxWidth={'400px'} maxHeight={"400px"}>
            </Wrapper>
        </Wrapper>
    );
};
export default Home;