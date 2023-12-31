import { makeAutoObservable } from 'mobx'
import { rootStore } from "./rootStore"
import { addVideoOutro } from '../accessAPI/videoAPI'

export type option = {
    value: number,
    text: string
}

export const TEXT_LIMIT = 20

export class outroStore {
    private rootStore

    /**
     * Outro data 
     */
    outro: option = { value: -1, text: '' }
    freeText: string = ''
    /**
     * Options for the call to action
     */
    options: option[] = []
    /**
     * Is in the middle of the process of saving the outro
     */
    isSaving: boolean = false

    constructor(rootStore?: rootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore

        this.init()
    }

    init() {
        getDummyOptions().then(data => {
            this.options = data
        })
    }

    /**
     * Updates the call to action based on the given option
     * @param newCode New action code from the options list
     */
    updateCallAction(newOption: option) {
        this.outro = newOption
        this.freeText = ''
    }

    /**
     * Updates the call to action based on the given new custom text
     * and resets the call to action code
     * @param newText New custom call to action text
     */
    updateCallText(newText: string) {
        if (newText.length <= TEXT_LIMIT) {
            this.outro = {
                value: -1,
                text: ''
            }
            this.freeText = newText
        }
    }

    async saveOutro() {
        // In the future might send also the code of the call to action or kit name
        const text = this.outro.text || this.freeText

        const response = await addVideoOutro(text)
        // In the future should also give indication to the status of the save
        alert(response)
    }


}

/**
 * In the future this should be taken from the server
 */
const dummyOptions: option[] = [
    {
        value: 1,
        text: 'Listen on Spotify'
    },
    {
        value: 2,
        text: 'Listen on Apple'
    },
    {
        value: 3,
        text: 'Listen on Google'
    },
]
/**
 * Stimulating async fetching of the options
 */
const getDummyOptions = () => {
    return new Promise<option[]>(resolve => {
        resolve(dummyOptions)
    })
}