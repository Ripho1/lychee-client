import { observer } from 'mobx-react-lite'
import { useStore } from '../../stores/storeProvider'
import { OutroView } from './outroView'

/**
 * Shows the correct view based on the store
 */
export const CurrentView = observer(() => {
    const { kitStore } = useStore()
    const view = kitStore.view

    switch (view) {
        case 'Custom brand kit':
            return <>Custom brand kit</>
        case 'Logo':
            return <>Logo</>
        case 'Outro':
            return <OutroView />
        case 'Texts':
            return <>Texts</>
        default:
            return <></>
    }
})