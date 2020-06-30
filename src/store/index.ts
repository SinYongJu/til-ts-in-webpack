// root store
import { observable, action, computed, reaction } from "mobx"
import Todo from "./Todo/Todo";
export interface IStore {
    count : number
    todo : Todo
}

class Store implements IStore{
    @observable count = 0
    @observable todo:Todo = null
    
    constructor () {
        this.todo = new Todo()
        reaction(
            () => this.todo,
            (_) => {console.log(_)}
        )
    }

    @action.bound
    increase(){
        this.count++
    }

    @action.bound
    decarease(){
        this.count--
    }
}


export default Store
