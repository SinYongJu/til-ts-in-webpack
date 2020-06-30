import * as React from 'react';
import InputText from '../InputText';
import Input, { INPUT_THEME_MAPPER, InputProps } from '../form/Input';
import TodoList from "./TodoList";
import styled from 'styled-components';
type TodoProps = {
    className ?: string
}
type TodoState = {
    value : string,
}

const inputTodo =  {
    id:"tfTodo",
    name: 'todos',
    error: false,
    theme: INPUT_THEME_MAPPER.BORDER,
}

const TodoInputText = styled(InputText)`
    ${Input} {
        padding: 10px 18px;
        font-size: 18px;
    } 
`
// React.Component<{props}, {state}}>
class Todo extends React.Component<TodoProps,TodoState>{
    state :TodoState = {
        value : ''
    }
    constructor(props:TodoProps){
        super(props)
    }
    onKeyPress(event : React.KeyboardEvent<HTMLInputElement>){
        if(event.charCode === 13 && this.state.value.length > 0){
            console.log('create')
        }
    }
    onChange(event : React.ChangeEvent<HTMLInputElement>){
        let value:string = event.target.value
        this.setState(state => {
            this.state.value = value
            return {
                ...state,
            }
        })
    }
    render(){
        const {onChange, state : {value}} = this
        const inputs = {
            ...inputTodo,
            value,
            onChange: onChange.bind(this)
        }
        return (
            <div className={this.props.className}>
                <strong>Todo Component</strong>
                <TodoInputText  {...inputs} onKeyPress={this.onKeyPress.bind(this)}/>
                <TodoList todolist={[
                    {   
                        id : 'todo__0__',
                        desc : 'skdnalskndlaksndlks',
                        timeStamp : '00:00:00 2020.02.02'
                    },
                    {   
                        id : 'todo__1__',
                        desc : 'skdnalskndlaksndlkssdasdasdasdasdasdas',
                        timeStamp : '00:00:00 2020.02.04'
                    }
                ]}/>
            </div>
        );
    }
};

export default styled(Todo)`
    padding: 20px;
    strong {
        display: block;
        padding: 20px 0;
    }
`;