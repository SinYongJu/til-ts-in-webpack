import * as React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/wrapper/Wrapper';

interface BoxProps {
borders?: boolean;
className?: string;
}

const BodyTemplate:React.FunctionComponent = ({children, ...props}) => {
    return (
        <div className="od"{...props}>
        <Wrapper>
            {children}
        </Wrapper>
        </div>
    );
};


export default  BodyTemplate;