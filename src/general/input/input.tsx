import './input.css'

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> { }

/**
 * An input wrapper with base css
 */
export const Input = ({ className, ...props }: InputProps) => {
    return <input className={`basic-input ${className}`} {...props} />
}