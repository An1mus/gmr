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

interface winningPatterns {
    [index: string]: string,
}

const WINING_PATTERNS: winningPatterns = {
    'xxx......': GAME_STATES.CROSS_WON,
    '...xxx...': GAME_STATES.CROSS_WON,
    '......xxx': GAME_STATES.CROSS_WON,
    'x..x..x..': GAME_STATES.CROSS_WON,
    '.x..x..x.': GAME_STATES.CROSS_WON,
    '..x..x..x': GAME_STATES.CROSS_WON,
    'x...x...x': GAME_STATES.CROSS_WON,
    'ooo......': GAME_STATES.CIRCLES_WON,
    '...ooo...': GAME_STATES.CIRCLES_WON,
    '......ooo': GAME_STATES.CIRCLES_WON,
    'o..o..o..': GAME_STATES.CIRCLES_WON,
    '.o..o..o.': GAME_STATES.CIRCLES_WON,
    '..o..o..o': GAME_STATES.CIRCLES_WON,
    'o...o...o': GAME_STATES.CIRCLES_WON,
};

export {CELL_TYPES, GAME_STATES, WINING_PATTERNS};
