import { observer } from 'mobx-react-lite'
import { useStore } from '../../stores/storeProvider'
import { TEXT_LIMIT } from '../../stores/outroStore'

import './freeTextCounter.css'

export const FreeTextCounter = observer(() => {
    const { outroStore } = useStore()
    const length = outroStore.freeText?.length || 0

    return <span className='free-text-counter'>{length}/{TEXT_LIMIT}</span>
})