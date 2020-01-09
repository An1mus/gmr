const CELL_TYPES = {
    EMPTY: ' ',
    CROSS: 'x',
    CIRCLE: 'o',
};

const GAME_STATES = {
    PLAYING: 'PLAYING',
    FIELD_FULL: 'FIELD_FULL',
    CIRCLES_WON: 'CIRCLES_WON',
    CROSS_WON: 'CROSS_WON',
};

interface IWinPattern {
    regExp: string,
    winType: string
}

const WINING_PATTERNS: Array<IWinPattern> = [
    {regExp: 'xxx......', winType: GAME_STATES.CROSS_WON},
    {regExp: '...xxx...', winType: GAME_STATES.CROSS_WON},
    {regExp: '......xxx', winType: GAME_STATES.CROSS_WON},
    {regExp: 'x..x..x..', winType: GAME_STATES.CROSS_WON},
    {regExp: '.x..x..x.', winType: GAME_STATES.CROSS_WON},
    {regExp: '..x..x..x', winType: GAME_STATES.CROSS_WON},
    {regExp: 'x...x...x', winType: GAME_STATES.CROSS_WON},
    {regExp: '..x.x.x..', winType: GAME_STATES.CROSS_WON},
    {regExp: 'ooo......', winType: GAME_STATES.CIRCLES_WON},
    {regExp: '...ooo...', winType: GAME_STATES.CIRCLES_WON},
    {regExp: '......ooo', winType: GAME_STATES.CIRCLES_WON},
    {regExp: 'o..o..o..', winType: GAME_STATES.CIRCLES_WON},
    {regExp: '.o..o..o.', winType: GAME_STATES.CIRCLES_WON},
    {regExp: '..o..o..o', winType: GAME_STATES.CIRCLES_WON},
    {regExp: 'o...o...o', winType: GAME_STATES.CIRCLES_WON},
    {regExp: '..o.o.o..', winType: GAME_STATES.CIRCLES_WON},
];

export {CELL_TYPES, GAME_STATES, WINING_PATTERNS};
