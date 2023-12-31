import { observer } from 'mobx-react-lite'
import { Input, InputProps } from '../../general/input/input'
import { useStore } from '../../stores/storeProvider'

interface KitNameProps extends Omit<InputProps, 'value' | 'onChange' | 'type'> { }

export const KitName = observer((props: KitNameProps) => {
    const { kitStore } = useStore()
    const name = kitStore.kitName

    return (
        <Input
            type='text'
            value={name}
            onChange={e => kitStore.updateKitName(e.target.value)}
            {...props}
        />
    )
})