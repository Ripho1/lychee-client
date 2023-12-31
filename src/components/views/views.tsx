import { observer } from 'mobx-react-lite'
import { Options, OptionsProps } from '../../general/options/options'
import { useStore } from '../../stores/storeProvider'
import { viewOptions } from '../../stores/kitStore'

interface ViewsProps extends Omit<OptionsProps, 'onOptionClick' | 'isActive'> { }

export const Views = observer((props: ViewsProps) => {
    const { kitStore } = useStore()
    const currentView = kitStore.view
    const views = kitStore.views
    const codedViews = views.map((v, index) => { return { text: v, value: index } })

    return <Options {...props}
        options={codedViews}
        isActive={(current) => current.text === currentView}
        onOptionClick={(clicked) => { kitStore.changeView(clicked.text as viewOptions) }}
    />
})