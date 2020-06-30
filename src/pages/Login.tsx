import * as React from 'react';
import styled, { css } from 'styled-components';
import InputText from '../components/InputText'
import TitleH2 from '../components/title/TitleH2';
import Button, { BUTTON_THEME_MAPPER } from '../components/button/Button';
import Wrapper from '../components/wrapper/Wrapper';
import { INPUT_THEME_MAPPER } from '../components/form/Input';
import Label from '../components/form/Label';


interface LoginProps {
    children : React.ReactChild
    className ?: string | object | any
}

interface ILoginInput {
    id: string
    name: string
    error: boolean
    onChange : Function
    value: string
    type?: string
    placeholder ?: string,
    theme: string 
}
interface ILoginPageInfo {
    userName : ILoginInput
    password : ILoginInput
}

const LoginStyle = css`
    max-width:500px;
    margin: 0 auto;
`
const LoginContainer = styled(Wrapper).attrs({className : 'login_container'})`
    ${LoginStyle};
    .tf_login{
        margin: 10px 0;
    }
    ${InputText} ${Label} {
        width: 100px;
    }
    ${Button}{
        margin: 5px 0;
    }
`



const Login:React.FC<LoginProps> = ({children, className, ...props}) => {

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        let name:string = event.target.name
        let value:string = event.target.value
        setLoginInfo((info:ILoginPageInfo) => {
            info[name as keyof ILoginPageInfo].value = value
            return {...info}
        })
    }

    const [loginInfo, setLoginInfo] = React.useState<ILoginPageInfo>(
        {
            userName : {
                id:"ftId",
                name: 'userName',
                error:false,
                placeholder:'id',
                onChange,
                value:'',
                theme: INPUT_THEME_MAPPER.SMIPLE
            },
            password : {
                id:"ftPwd",
                name: 'password',
                type:'password',
                error:false,
                placeholder:'password',
                onChange,
                value: '',
                theme: INPUT_THEME_MAPPER.SMIPLE
            }
        }
   )
   
  
    const onSubmit = (event:React.FormEvent) => {
        event.preventDefault()
        if( loginInfo.userName.value.length < 8){
            setLoginInfo((info)=>{
                info.userName.error = true
                return {
                    ...info
                }
            })
            alert('짧아')
            return 
        }
        if( loginInfo.password.value.length < 8){
            setLoginInfo((info)=>{
                info.password.error = true
                return {
                    ...info
                }
            })
            alert('비밀 벌호 짧아')
            return 
        }

        alert('OK')
    }
    return (
        <LoginContainer className={className}>
            <form action="#none" onSubmit={onSubmit}>
                <TitleH2>{children}</TitleH2>
                <fieldset>
                    <legend>login form</legend>
                    <InputText {...loginInfo.userName} className="tf_login">ID</InputText>
                    <InputText {...loginInfo.password} className="tf_login">password</InputText>
                    <Button theme={BUTTON_THEME_MAPPER.BLUE} type="submit">Login</Button>
                    <Button theme={BUTTON_THEME_MAPPER.BALCK} type="button">SIGN UP</Button>
                </fieldset>
            </form>
        </LoginContainer>
    );
};

export default styled(Login)`${LoginStyle}`