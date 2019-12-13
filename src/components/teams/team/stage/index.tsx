import React from "react";

import './step.css';

interface Props {
    data: any,
}

const Stage: React.FC<Props> = ({data}) => {
    const colors: any = {done: '#C7FFF7', in_progress: '#FFFCD4', not_started: '#EFEFEF'};
    const {status, step_name} = data;
    return (
        <div className={'step'} style={{backgroundColor:  colors[status] || ''}}>
            <div>
                <p>{step_name}</p>
            </div>
        </div>
    );
};

export default Stage;
