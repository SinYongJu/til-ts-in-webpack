import * as React from 'react';
import Label from '../form/Label';
import Button, { BUTTON_THEME_MAPPER } from '../button/Button';
import styled from 'styled-components';
import TodoItem from "./TodoItem";
type TodoListProps = {
    todolist: Array<{}>
}

export type TodoItem = {
    id : string,desc: string, timeStamp : string
}

const TodoList:React.FunctionComponent<TodoListProps> = (props) => {
    const { todolist } = props
    const onDoubleClickToModify = (id : string) => (event: React.MouseEvent<HTMLLIElement>) : void => {
        console.log(id)
        const value:string = prompt('Update Todo')
        console.log(value)
    }
    const onClickToDelete = (id : string) => (event: React.MouseEvent<HTMLButtonElement>) : void => {
        console.log(id)
    }
    return (
        <ul>
          {todolist.map((item : TodoItem, index) => <TodoItem key={`${item.id}__${index}`} item={{...item}} onClick={onClickToDelete(item.id)} onDoubleClick={onDoubleClickToModify(item.id)}/>)}
        </ul>
    );
};

TodoList.defaultProps = {
    todolist : []
}
export default TodoList;