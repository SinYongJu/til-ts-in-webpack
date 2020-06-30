// root store
import { observable, action, computed, reaction } from "mobx"

export interface IStore {
    count : number
}

class Store implements IStore{
    @observable count = 0
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
