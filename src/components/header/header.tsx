import './header.css'

interface HeaderProps extends React.ComponentPropsWithoutRef<'div'>{}

export const Header = ({className, ...props}: HeaderProps) => {
    return (
        <div className={`header ${className}`} {...props}>
            <div className='primary'>
                Brand Kit
            </div>
            <div className='secondary'>
                Here you can set the brand kit for your Short-Form clips. Note, long-form videos are not affected by this brand kit
            </div>
        </div>
    )
}