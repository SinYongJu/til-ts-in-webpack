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

const BodyTemplateBox:React.FunctionComponent = ({children, ...props}) => {
    return (
        <div className="od"{...props}>
        <Box>
            {children}
        </Box>
        <StyledBox/>
        </div>
    );
};

const BodyTemplate = styled(BodyTemplateBox)`
    background-color:red;
`
console.log(BodyTemplate)

export default BodyTemplate;