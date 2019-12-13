import React from "react";

import Stage from './stage';
import ErrorAlert from '../../errorAlert';

interface Props {
    data: any,
}

const Team: React.FC<Props> = ({data}) => {
    const {steps, team_name} = data;

    return (
		<div className='row mt-3 mb-3 shadow-sm'>
			<div className='flex-fill card'>
				<div className="py-4 card-body">
                    <h4 className='mb-3'>{team_name}</h4>

                    <div className='d-flex flex-wrap'>
                        {steps.length > 0
                            ? steps.map((step: any) => <Stage key={step.step_id} data={step}/>)
                            : <ErrorAlert message='No Steps found'/>
                        }
                    </div>
				</div>
			</div>
		</div>
    );
};

export default Team;
