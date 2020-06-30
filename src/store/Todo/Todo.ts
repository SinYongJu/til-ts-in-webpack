import { observable, action } from "mobx";

// 시계 ui를 만들 것이다!! 
interface ITodo{
    todoList : Array<object>
}

class Todo implements ITodo {
    @observable todoList:Array<object> = []

    @action
    createTodo () {}
    @action
    updateTodo () {}
    @action
    getTodo () {
        //read
    } 
    @action
    deleteTodo () {}
}