
import { Logo } from './Logo';
import { Navigation } from './Navigation';

import './index.scss';

export const Header = () => {
    return (
        <header>
            <div>
                <Logo />
                <Navigation />
            </div>
        </header>
    );
}