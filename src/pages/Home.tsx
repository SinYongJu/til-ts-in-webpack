import * as React from 'react';
import styled from 'styled-components';
import TitleH2 from '../components/title/TitleH2';
import TitleH3 from '../components/title/TitleH3';
import BodyTemplate from '../template/BodyTemplate';
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
   max-height: ${props => props.maxHeight ? props.maxHeight : 'none'};
`

const Home:React.FunctionComponent = ({ children,...props}) => {
    return (
        <BodyTemplate {...props}>
            <TitleH2>HOME</TitleH2>
            <Wrapper height={"740px"} maxHeight={"400px"}>
                <TitleH3>Contents Title</TitleH3>
            </Wrapper>
        </BodyTemplate>
    );
};

export default styled(Home)`
    background-color:blue
`;