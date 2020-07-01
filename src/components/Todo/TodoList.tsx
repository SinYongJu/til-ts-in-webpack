import * as React from 'react';
import Label from '../form/Label';
import Button, { BUTTON_THEME_MAPPER } from '../button/Button';
import styled from 'styled-components';
import TodoItem from "./TodoItem";
type TodoListProps = {
    className? : string
    todolist: Array<TodoItem>
    deleteTodo : (id:string) => void,
    updateTodo : (id:string,value:string) => void
    checkTodo : (id:string, checked:boolean) => void
}

export type TodoItem = {
    id : string,desc: string, timeStamp : string, done? : boolean
}

const TodoList:React.FunctionComponent<TodoListProps> = (props) => {
    const { todolist, deleteTodo , updateTodo, checkTodo } = props
    const onDoubleClickToModify = (id : string) => (event: React.MouseEvent<HTMLLIElement>) : void => {
        const value:string = prompt('Update Todo')
        if(value !== null) updateTodo(id, value)
    }
    const onClickToDelete = (id : string) => (event: React.MouseEvent<HTMLButtonElement>) : void => {
        deleteTodo(id)
    }
    const onCheckTodo = (id: string) =>(event: React.ChangeEvent<HTMLInputElement>):void => {
        checkTodo(id, event.target.checked)
    }
    // let list = React.useMemo(() => ,[todolist])
    
    return (
        <ul className={props.className}>
          {todolist.map((item : TodoItem, index) => <TodoItem key={`${item.id}__${index}`} item={{...item}} onClickDelete={onClickToDelete(item.id)} onClickModify={onDoubleClickToModify(item.id)} onCheckTodo={onCheckTodo(item.id)}/>)}
        </ul>
    );
};

TodoList.defaultProps = {
    todolist : []
}
export default React.memo(styled(TodoList)`
    overflow: hidden;
    overflow-y: auto;
    max-height: 200px;
`);