import * as React from 'react';
import Label from '../form/Label';
import Button, { BUTTON_THEME_MAPPER } from '../button/Button';
import styled from 'styled-components';
import Input, { INPUT_THEME_MAPPER } from '../form/Input';
import { TodoItem } from './TodoList';


type ToddItemProps = {
    key: string
    item : TodoItem
    onClick : (event:React.MouseEvent) => void
    onDoubleClick : (event:React.MouseEvent) => void
}

const TodoItemButton = styled(Button)`
    width : 70px;
`

const TodoItem:React.FunctionComponent<ToddItemProps> = (props) => {
    const {item , onClick, onDoubleClick, ...rest} = props
    const checkboxId:string = `${item.id}__Check`
    return (
        <li {...rest} onDoubleClick={onDoubleClick}>
            <Input type="checkbox" id={checkboxId} error={false}/>
            <Label htmlFor={checkboxId}>
                <em>{item.id}</em>
                <p>{item.desc}</p>  
                <small>{item.timeStamp}</small>
                <TodoItemButton onClick={onClick} theme={BUTTON_THEME_MAPPER.BLUE}>삭제</TodoItemButton>
            </Label>
      </li>
    );
};

export default TodoItem;