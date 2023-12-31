import './button.css'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> { }

/**
 * A button wrapper with base css
 */
export const Button = ({ className, ...props }: ButtonProps) => {
    return <button className={`basic-button ${className}`} {...props}/>
}