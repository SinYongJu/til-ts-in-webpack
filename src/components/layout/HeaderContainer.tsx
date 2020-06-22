import styled from 'styled-components';

const HeaderContainer = styled.header`
padding: 10px 20px;
background-color: rgb(198, 255, 0);
::after{
    display: block;
    height: 0;
    clear: both;
    content: ''
}
`

export default HeaderContainer