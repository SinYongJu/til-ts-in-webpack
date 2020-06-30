import { observable } from "mobx"

export interface ITodoItem {
    id : string
    desc : string
    timeStamp : string

}
export class TodoItem implements ITodoItem{
    id = ''
    desc = ''
    timeStamp = ''
    constructor(todo : ITodoItem){
        this.id = todo.id
        this.desc = todo.desc
        this.timeStamp = todo.timeStamp
    }
}