import { kitStore } from "./kitStore"
import { outroStore } from "./outroStore"

export class rootStore {
    kitStore: kitStore
    outroStore: outroStore

    constructor() {
        this.kitStore = new kitStore(this)
        this.outroStore = new outroStore(this)
    }
}