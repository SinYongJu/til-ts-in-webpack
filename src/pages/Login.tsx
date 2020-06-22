import * as React from 'react';
import styled, { css } from 'styled-components';
import InputText from '../components/InputText'


const LoginStyle = css`
    max-width:500px;
    margin: 0 auto;
    
`
const LoginContainer:React.FC = styled.div`
    ${LoginStyle};
    .tf_login{
        margin: 10px 0;
    }
`


const Login:React.FC = (props) => {
    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
        let name:string = event.target.name
        let value:string = event.target.value
        console.log(name,value)
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
            <h2>{props.children}</h2>
            <InputText input={idInput} className="tf_login">ID</InputText>
            <InputText input={pwdInput} className="tf_login">password</InputText>
        </LoginContainer>
    );
};



export default Login;