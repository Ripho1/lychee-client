import { observer } from 'mobx-react-lite'
import { useStore } from '../../stores/storeProvider'
import { Select, SelectProps } from '../../general/select/select'

export const CallActionsSelect = observer((props: SelectProps) => {
    const { outroStore } = useStore()
    const selected = outroStore.outro
    const options = outroStore.options

    return <Select {...props}
        selected={selected.value === -1 ? dummyOption : selected}
        options={options}
        onOptionClick={(newSelected) => outroStore.updateCallAction(newSelected)}
    />
})

const dummyOption = { text: 'Select', value: -1 }