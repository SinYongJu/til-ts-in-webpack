import { observable, action } from "mobx";
import { TodoItem, ITodoItem } from "./TodoItem";

// 시계 ui를 만들 것이다!! 
export interface ITodoStore{
    todoList : Array<TodoItem>,
    createTodo : (item: ITodoItem) => void
}

class Todo implements ITodoStore {
    @observable todoList:Array<TodoItem> = [
        // {   
        //     id : 'todo__0__',
        //     desc : 'skdnalskndlaksndlks',
        //     timeStamp : '00:00:00 2020.02.02'
        // },
        // {   
        //     id : 'todo__1__',
        //     desc : 'skdnalskndlaksndlkssdasdasdasdasdasdas',
        //     timeStamp : '00:00:00 2020.02.04'
        // }
    ]
    @action.bound
    createTodo (item: ITodoItem) {
        this.todoList = this.todoList.concat([new TodoItem(item)])
        console.log(this.todoList)
    }
    @action
    updateTodo (id : string, desc: string) {
        let index:number = this.todoList.findIndex((todo:TodoItem) => todo.id === id)
        this.todoList[index].desc = desc
    }
    @action
    getTodo () {
        //read
    } 
    @action
    deleteTodo (id : string) {
        this.todoList = this.todoList.filter((todo:TodoItem) => todo.id !== id)
    }
}

export default Todo