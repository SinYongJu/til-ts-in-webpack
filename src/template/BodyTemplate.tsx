import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`

`
interface BoxProps {
borders?: boolean;
className?: string;
}

const Boxed: React.FunctionComponent<BoxProps> = props => <div className={props.className}>{props.children}</div>

const StyledBox = styled(Boxed)`
    padding: ${props => props.theme.lateralPadding};
    height:50px;
    background-color:red;
`

const BodyTemplate:React.FunctionComponent = ({children, ...props}) => {
    return (
        <div className="od"{...props}>
        <Box>
            {children}
        </Box>
        <StyledBox/>
        </div>
    );
};


export default  BodyTemplate;