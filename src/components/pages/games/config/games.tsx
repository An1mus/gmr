import TicTacToe from '../implementations/tictactoe';

const GAME_LINKS = [
    {
        id: 0,
        path: '/ttt',
        title: 'Tic Tac Toe'
    }
];

const GAME_COMPONENTS = [
    {
        id: 0,
        path: '/ttt',
        component: TicTacToe,
    }
];

export { GAME_LINKS, GAME_COMPONENTS};
