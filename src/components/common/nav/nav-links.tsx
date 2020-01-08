import {ReactComponent as GamesIcon} from '../../../assets/nav/games.svg';
import {ReactComponent as AboutIcon} from '../../../assets/nav/about.svg';
import {ReactComponent as HomeIcon} from '../../../assets/nav/home.svg';
import { IMainNavigationItem } from '../../../common/types';

const NavLinks: IMainNavigationItem[] = [
    {
        id: 0,
        url: '/',
        icon: HomeIcon,
        title: 'Home'
    },
    {
        id: 1,
        url: '/games',
        icon: GamesIcon,
        title: 'Games'
    },
    {
        id: 2,
        url: '/about',
        icon: AboutIcon,
        title: 'About'
    }
];

export default NavLinks;
