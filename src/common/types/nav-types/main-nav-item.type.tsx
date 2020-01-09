import React from 'react';

export default interface IMainNavigationItem {
    id: number,
    url: string,
    exact: boolean,
    icon: React.FunctionComponent,
    title: string,
}

