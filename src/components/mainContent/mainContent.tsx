import { KitTitle } from '../kitTitle/kitTitle'
import { SaveButton } from '../saveButton/saveButton'
import { CurrentView } from '../views/currentView'
import { Views } from '../views/views'
import './mainContent.css'

interface MainContentProps extends React.ComponentPropsWithoutRef<'div'> { }


export const MainContent = ({ className, ...props }: MainContentProps) => {
    return (
        <div className={`main-content ${className}`} {...props}>
            <KitTitle className='title' />
            <div className='container'>
                <Views className='views' optionClassName='view' activeClassName='active-view' />
                <CurrentView />
            </div>
            <div className='footer'>
                <hr className='seperator' />
                <SaveButton className='save' />
            </div>
        </div>
    )
}