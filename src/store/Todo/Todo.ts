import { observable, action, computed } from "mobx";
import { TodoItem, ITodoItem } from "./TodoItem";

// 시계 ui를 만들 것이다!! 
export interface ITodoStore{
    todoList : Array<TodoItem>
    selected : Array<string>
    createTodo : (item: ITodoItem) => void
    updateTodo : (id : string, desc: string)  => void
    deleteTodo : (id : string) => void
    checkTodo : (id : string, check: boolean) => void
    getTodoId : string
    todoListLength : number
    selectedLength : number
    selectedListJoinByComma: string
}
// type updateTodoItem = {
//     id: string
//     desc: string
// }

class Todo implements ITodoStore {
    @observable todoList:Array<TodoItem> = [
        // {   
        //     id : 'todo__0__',
        //     desc : 'skdnalskndlaksndlks',
        //     timeStamp : '00:00:00 2020.02.02',
        //     done: false
        // },
        // {   
        //     id : 'todo__1__',
        //     desc : 'skdnalskndlaksndlkssdasdasdasdasdasdas',
        //     timeStamp : '00:00:00 2020.02.04',
        //     done: false
        // }
    ]
    @observable selected:string[] = [
        // 'todo__0__','todo__1__'
    ]

    constructor(){
        if(this.todoListLength > 0 && this.selectedLength > 0){
            this.selected.forEach(id => {
                this.todoList[this.getTodoIndexById(id)].done = true
                this.setTodoList(this.todoList)
            })
        }
    }
    getTodoIndexById(id:string):number{
        return this.todoList.findIndex((todo:TodoItem) => todo.id === id)
    }
    @computed
    get todoListLength ():number{
        return this.todoList.length
    }
    @computed
    get selectedLength ():number{
        return this.selected.length
    }
    @computed
    get selectedListJoinByComma ():string{
        return this.selected.join(' , ')
    }
    @computed
    get getTodoId (){
        if(this.todoListLength > 0){
            let lastId = parseInt(this.todoList[this.todoListLength-1].id.split('_')[1])
            return `todo_${lastId+1}__`
        }
        return `todo_${this.todoList.length}__`
    }
    isSelectedTodoItemId (id: string):boolean{
        // console.log(id)
        return this.selected.includes(id)
    }

    @action 
    setTodoList (todoList : Array<TodoItem>){
        this.todoList = [...todoList]
    }
    @action 
    setCheckedTodoItemId (id :string){
        this.selected = this.selected.concat(id)
        // console.log(this.selected)
    }
    @action 
    filteredCheckedTodoItemId (id :string){
        this.selected = this.selected.filter(selected => selected !== id)
    }
    @action.bound
    createTodo (item: ITodoItem) {
        this.setTodoList(this.todoList.concat([new TodoItem(item)]))
    }
    @action.bound
    updateTodo (id : string, desc: string) {
        let index:number = this.getTodoIndexById(id)
        if(desc.length > 0){
            this.todoList[index].desc = desc
        }
        this.todoList[index].timeStamp = String(Date.now())
        this.setTodoList(this.todoList)
    }
    @action.bound
    checkTodo (id : string, check:boolean) {
        let index:number = this.getTodoIndexById(id)
        if(check && !this.isSelectedTodoItemId(id)){
            this.setCheckedTodoItemId(id)
        } else{
            this.filteredCheckedTodoItemId(id)
        }
        this.todoList[index].done = check
        this.setTodoList(this.todoList)
    }
    @action.bound
    deleteTodo (id : string) {
        this.filteredCheckedTodoItemId(id)
        this.setTodoList(this.todoList.filter((todo:TodoItem) => todo.id !== id))
    }
    @action
    getTodo () {} 
}

export default Todo