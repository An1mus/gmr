import React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { REQUEST_DATA } from '../../common';

import TeamsView from '../teams';
import ErrorAlert from '../errorAlert';

interface State {
    gameName: string
    gameData: any,
    dataLoading: boolean
}

class App extends React.Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            gameName: '',
            gameData: [],
            dataLoading: false,
        }
    }

    componentDidMount() {
        const callApi = async () => {
            this.setState({dataLoading: true});

            try {
                const response = await axios.get(REQUEST_DATA.URL);
                const {campaign_name, team_instances} = response.data;

                this.setState({gameName: campaign_name, gameData: team_instances});
            } catch (e) {
                console.log(e.toString());
            } finally {
                this.setState({dataLoading: false});
            }
        };

        callApi();
    }

    render() {
        const {gameData, gameName, dataLoading} = this.state;

        return (
            <div className="wrapper bg-light">
                <div className="container vh-100 pt-3 pb-5">
                    <header>
                        <h1>
                            Scenario Visualization&nbsp;
                            {
                                dataLoading &&
								<div className="spinner-border text-dark"
									 style={{fontSize: '1rem'}} role="status">
									<span className="sr-only">Loading...</span>
								</div>
                            }
                        </h1>
                        <h3 className='mt-5'>{gameName}</h3>
                    </header>

                    {gameData.length !== 0
                        ? <TeamsView teamsData={gameData}/>
                        : !dataLoading && <ErrorAlert message={'No data received'}/>
                    }
                </div>
            </div>
        );
    }
};

export default App;
