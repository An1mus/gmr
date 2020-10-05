import React from 'react';

interface Props {
    message: string
}

const ErrorAlert: React.FC<Props> = ({message}) => <div className="alert alert-primary" role="alert">{message}</div>;

export default ErrorAlert;
