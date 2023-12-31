import { option } from '../../stores/outroStore'
import './options.css'

export interface OptionsProps extends React.ComponentPropsWithoutRef<'div'> {
    optionClassName?: string,
    activeClassName?: string,
    options?: option[],
    isActive?: (current: option) => boolean,
    onOptionClick?: (selected: option) => void
}

export const Options = ({ className, optionClassName, activeClassName, options = [], isActive, onOptionClick, ...props }: OptionsProps) => {
    return (
        <div className={`options ${className}`} {...props}>
            {
                options.map(option =>
                    <div
                        key={option.value}
                        onClick={() => onOptionClick?.(option)}
                        className={`option ${optionClassName} ${isActive?.(option) && 'active ' + activeClassName}`}
                    >
                        <span>
                            {option.text}
                        </span>
                    </div>
                )
            }
        </div>
    )
}