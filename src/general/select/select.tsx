import { useEffect, useRef, useState } from 'react'
import { Options, OptionsProps } from '../options/options'
import downTriangle from '../../icons/down-triangle.png'
import { option } from '../../stores/outroStore'

import './select.css'

export interface SelectProps {
    /**
     * ClassName for the entire options container
     */
    optionsClassName?: string,
    optionClassName?: string,
    selectClassName?: string,
    className?: string,
    selected?: option
}

export const Select = ({ className, optionsClassName, selectClassName, selected, ...props }: SelectProps & OptionsProps) => {
    const [showOptions, setShowOptions] = useState(false)
    const optionsRef = useRef<HTMLDivElement>(null)
    const selectRef = useRef<HTMLSpanElement>(null)

    /**
     * Subscribing to onclick in order to close the options menu
     */
    useEffect(() => {
        document.addEventListener('click', closeOptions)

        return () => {
            document.removeEventListener('click', closeOptions)
        }
    }, [])

    /**
     * Checking if the click was outside the options/select zone
     */
    const closeOptions = (e: MouseEvent) => {
        const options = optionsRef.current
        const select = selectRef.current
        if (options && !options.contains(e.target as Node) &&
            select && !select.contains(e.target as Node)) {
            setShowOptions(false)
        }
    }

    return (
        <div className={`select-container ${className}`}>
            <span
                ref={selectRef}
                className={`select ${selectClassName}`}
                onClick={() => setShowOptions(!showOptions)}
            >
                {selected?.text}
                <img className='icon' src={downTriangle} alt='' />
            </span>
            <div ref={optionsRef}>
                <Options
                    onClick={() => setShowOptions(false)}
                    className={`select-options ${showOptions ? '' : 'hide'} ${optionsClassName}`}
                    {...props}
                />
            </div>
        </div>
    )
}