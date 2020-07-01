import * as React from 'react';
import InputText from '../InputText';
import Input, { INPUT_THEME_MAPPER, InputProps } from '../form/Input';
import TodoList from "./TodoList";
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { ITodoStore } from '../../store/Todo/Todo';
type TodoProps = {
    className ?: string,
    todo?: ITodoStore
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

@inject(({store}) => ({
    todo : store.todo
}))
@observer
class Todo extends React.Component<TodoProps,TodoState>{
    state :TodoState = {
        value : ''
    }
    constructor(props:TodoProps){
        super(props)
    }
    setStateValue(value:string){
        this.setState(state => {
            this.state.value = value
            return {
                ...state,
            }
        })
    }
    onKeyPress(event : React.KeyboardEvent<HTMLInputElement>):void{
        if(event.charCode === 13 && this.state.value.length > 0){
            const { todo } = this.props
            todo.createTodo({
                id : todo.getTodoId,
                desc : this.state.value,
                timeStamp : String(Date.now()),
                done: false
            })
            this.setStateValue('')
        }
    }
    onChange(event : React.ChangeEvent<HTMLInputElement>):void{
        let value:string = event.target.value
        this.setStateValue(value)
    }
    render(){
        const {onChange, state : {value}} = this
        const { todo } = this.props
        const inputs = {
            ...inputTodo,
            value,
            onChange: onChange.bind(this)
        }
        return (
            <div className={this.props.className}>
                <strong>Todo Component</strong>
                <p>
                    <em>total todo</em> : { todo.todoListLength }
                </p>
                <p>
                    <em>progressed</em> : { todo.selectedLength} / {todo.todoListLength }
                </p>
                <p>
                    [ {todo.selectedListJoinByComma} ]
                </p>
                <TodoInputText  {...inputs} onKeyPress={this.onKeyPress.bind(this)}/>
                <TodoList 
                    todolist={todo.todoList}
                    deleteTodo={todo.deleteTodo}
                    updateTodo={todo.updateTodo}
                    checkTodo={todo.checkTodo}
                />
                
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