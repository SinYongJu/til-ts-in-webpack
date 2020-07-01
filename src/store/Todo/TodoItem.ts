import { observable } from "mobx"

export interface ITodoItem {
    id : string
    desc : string
    timeStamp : string,
    done : boolean

}
export class TodoItem implements ITodoItem{
    id = ''
    desc = ''
    timeStamp = ''
    done = false
    constructor(todo : ITodoItem){
        this.id = todo.id
        this.desc = todo.desc
        this.timeStamp = todo.timeStamp
    }
}