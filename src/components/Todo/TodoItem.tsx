import * as React from 'react';
import Label from '../form/Label';
import Button, { BUTTON_THEME_MAPPER } from '../button/Button';
import styled from 'styled-components';
import Input from '../form/Input';
import { TodoItem } from './TodoList';


type ToddItemProps = {
    className?: string
    key: string
    item : TodoItem
    onClickDelete : (event:React.MouseEvent) => void
    onClickModify : (event:React.MouseEvent) => void
    onCheckTodo: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TodoCheckWrraper = styled.span`
    float:left;
    padding: 20px;
`
const TodoItemButton = styled(Button)`
    width : 70px;
    margin-top : 30px;
    & + & {
        margin-left : 10px;
    }
`
const TodoItemLable = styled(Label)`
    float:left;
    min-width: 100px;
    margin-right: 30px;
`
const TodoItem:React.FunctionComponent<ToddItemProps> = (props) => {
    const {item , onClickDelete, onClickModify, onCheckTodo , ...rest} = props
    const checkboxId:string = `${item.id}__Check`
    return (
        <li {...rest} className={rest.className}>
            <TodoCheckWrraper>
                <Input type="checkbox" id={checkboxId} error={false} onChange={onCheckTodo} checked={item.done}/>
            </TodoCheckWrraper>
            <TodoItemLable htmlFor={checkboxId}>
                <em>{item.id}</em>
                <p>{item.desc}</p>  
                <small>{item.timeStamp}</small>
            </TodoItemLable>
            <TodoItemButton onClick={onClickModify} theme={BUTTON_THEME_MAPPER.BALCK}>수정</TodoItemButton>
            <TodoItemButton onClick={onClickDelete} theme={BUTTON_THEME_MAPPER.BLUE}>삭제</TodoItemButton>
            {item.done&&<em>Complete!!</em>}
        </li>
    );
};

export default styled(TodoItem)`
    overflow:hidden;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
    margin-top: 10px;
    ${TodoItemLable}>em {
        color: transparent
    }
    ${TodoItemLable}{
        ${props => props.item.done && `
        p {
            text-decoration: line-through;
        }
    `}
    }
        
    
`;