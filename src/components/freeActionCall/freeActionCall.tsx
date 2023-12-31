import { observer } from 'mobx-react-lite'
import { useStore } from '../../stores/storeProvider'

import './freeActionCall.css'

interface FreetextActionCallProps extends React.ComponentPropsWithoutRef<'textarea'> { }

export const FreetextActionCall = observer(({ className, ...props }: FreetextActionCallProps) => {
    const { outroStore } = useStore()
    const freeText = outroStore.freeText

    return (
        <textarea
            className={`freetext-call-action ${className}`}
            value={freeText}
            onChange={e => outroStore.updateCallText(e.target.value)}
            {...props}
        />
    )
})