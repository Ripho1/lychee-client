import { makeAutoObservable } from "mobx"
import { rootStore } from "./rootStore"

export type viewOptions = 'Texts' | 'Logo' | 'Outro' | 'Custom brand kit'

export class kitStore {
    private rootStore

    kitName = ''
    view: viewOptions = 'Outro'
    views: viewOptions[] = ['Texts', 'Logo', 'Outro', 'Custom brand kit']

    /**
     * Passing the root store would allow for easy communication between multiple stores
     * @param rootStore The root store
     */
    constructor(rootStore?: rootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore
    }

    updateKitName(newName: string) {
        this.kitName = newName
    }

    /**
     * this is a placeholder for the future for other features of the site
     */
    changeView(newView: viewOptions) {
        if (this.views.indexOf(newView) !== -1) {
            this.view = newView
        }
    }
}