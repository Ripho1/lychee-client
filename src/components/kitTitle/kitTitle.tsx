import { KitName } from '../kitName/kitName'

import './kitTitle.css'

interface KitTitleProps extends React.ComponentPropsWithoutRef<'div'> { }

export const KitTitle = ({ className, ...props }: KitTitleProps) => {
    return (
        <div className={`kit-title ${className}`} {...props}>
            <span className='label'>
                Brand kit name
            </span>
            <KitName className='kit-input' />
        </div>
    )
}