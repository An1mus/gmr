import React from "react";

import Team from './team';
import ErrorAlert from '../errorAlert';

interface Props {
    teamsData: any[],
}

const TeamsView: React.FC<Props> = ({teamsData = []} ) => {
    return (
        <div className='container'>
            {teamsData.length !== 0
                ? teamsData.map(team => <Team key={team.team_id} data={team}/>)
                : <ErrorAlert message={"No Teams data provided"} />
            }
        </div>
    );
};

export default TeamsView;
