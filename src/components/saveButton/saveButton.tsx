import { Button } from '../../general/button/button'
import { useStore } from '../../stores/storeProvider'

import './saveButton.css'

interface SaveButtonProps extends React.ComponentPropsWithoutRef<'button'> { }

export const SaveButton = ({ className, ...props }: SaveButtonProps) => {
    const { outroStore } = useStore()

    return (
        <Button onClick={() => outroStore.saveOutro()} className={`${className}`} {...props}>
            <span className='save-text'>
                Save
            </span>
        </Button>
    )
}