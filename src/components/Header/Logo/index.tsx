
import { HeaderDictionary } from '../../../dictionary/Dictionary';

import './index.scss';
import { MainLogo } from '../../../assets';

export const Logo = () => {
    return (
        <div className='logo-wrapper'>
            <img alt='' src={MainLogo}/>
            <p>{HeaderDictionary.logoTitle}</p>
        </div>
    );
}