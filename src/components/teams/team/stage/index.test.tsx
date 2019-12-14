// Link.react.test.js
import React from 'react';
import Stage from './index';

const STAGE_PROPS = {
    DONE: {status: 'done', step_name: 'Step Done'},
    IN_PROGRESS: {status: 'in_progress', step_name: 'Step In Progress'},
    NOT_STARTED: {status: 'not_started', step_name: 'Step Not Started'},
};

test('Stage rendered with plain props', () => {
    const s1 = <Stage data={STAGE_PROPS.DONE} />;
});
