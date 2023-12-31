import { FreetextActionCall } from '../freeActionCall/freeActionCall'
import { FreeTextCounter } from '../freeActionCall/freeTextCounter'
import exclamationImage from '../../icons/exclmation-mark.png'
import { CallActionsSelect } from '../callActionsSelect/callActionsSelect'

import './outroView.css'

export const OutroView = () => {

    return (
        <div className='outro-container'>
            <div className='outro-title'>
                Outro
                <img src={exclamationImage} alt='!' title='We will show the call to action at the end of the clip'/>
            </div>
            <div className='call-to-action'>
                <span>
                    Call to action
                </span>
                <CallActionsSelect className='call-select' optionsClassName='call-options' optionClassName='call-option'/>
            </div>
            <div className='call-to-action gap-fix'>
                <span>
                    Custom call to action
                </span>
                <div className='free-text-container'>
                    <FreetextActionCall className='free-text' />
                    <FreeTextCounter />
                </div>
            </div>
        </div>
    )
}