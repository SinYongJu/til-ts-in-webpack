import * as React from 'react';
import styled, { css } from 'styled-components';
import InputText from '../components/InputText'
import TitleH2 from '../components/title/TitleH2';
import Button from '../components/button/Button';


const LoginStyle = css`
    max-width:500px;
    margin: 0 auto;
`

const LoginContainer:React.FC = styled.div`
    ${LoginStyle};
    .tf_login{
        margin: 10px 0;
    }
    ${InputText} label {
        width: 100px;
    }
    ${Button}{
        margin: 5px 0;
    }
`


const LoginPage:React.FC = (props) => {
    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
        let name:string = event.target.name
        let value:string = event.target.value
        console.log(name,value)
    }
    const onSubmit = (event:React.FormEvent) => {
        event.preventDefault()
    }
    const idInput = {
        onChange,
        id:"ftId",
        name: 'userName',
        error:false,
        placeHolder:'id'
    }
    const pwdInput = {
        onChange,
        id:"ftPwd",
        name: 'password',
        type:'password',
        error:false,
        placeHolder:'id'
    }

    return (
        <LoginContainer>
            <form action="#none" onSubmit={onSubmit}>
                <TitleH2>{props.children}</TitleH2>
                <InputText input={idInput} className="tf_login">ID</InputText>
                <InputText input={pwdInput} className="tf_login">password</InputText>
                <Button theme="blue">Login</Button>
                <Button theme="black">SIGN UP</Button>
            </form>
        </LoginContainer>
    );
};

const Login = styled(LoginPage)`
    width: 200px
`;

export default Login