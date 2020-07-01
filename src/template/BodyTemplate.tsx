import * as React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/wrapper/Wrapper';

const Body= styled(Wrapper)`
    width: 740px;
    margin: 0 auto
`
const BodyTemplate:React.FunctionComponent = ({children, ...props}) => {
    return (
        <div className="od"{...props}>
            <Body>
                {children}
            </Body>
        </div>
    );
};


export default  BodyTemplate;