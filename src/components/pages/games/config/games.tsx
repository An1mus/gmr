import {ReactComponent as TicTacToeIcon} from '../../../../assets/game-nav-icons/ttt.svg';
import {ReactComponent as PongIcon} from '../../../../assets/game-nav-icons/ping-pong.svg';

import TicTacToe from '../implementations/tictactoe';
import Pong from '../implementations/pong';

const GAME_LINKS = [
    {
        id: 0,
        path: '/ttt',
        icon: TicTacToeIcon,
        title: 'Tic Tac Toe'
    },
    {
        id: 1,
        path: '/pong',
        icon: PongIcon,
        title: 'Tic Tac Toe'
    }
];

const GAME_COMPONENTS = [
    {
        id: 0,
        path: '/ttt',
        component: TicTacToe,
    },
    {
        id: 1,
        path: '/pong',
        component: Pong,
    }
];

export { GAME_LINKS, GAME_COMPONENTS};
