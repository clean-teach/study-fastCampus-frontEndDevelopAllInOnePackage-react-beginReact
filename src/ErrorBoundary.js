import React from 'react';
import * as Sentry from '@sentry/browser';

class ErrorBoundary extends React.Component {
    state = {
        error: false
    }

    componentDidCatch(error, info) {
        console.log('Error 가 발생했습니다!');
        console.log({error, info});

        this.setState({
            error: true
        });

        if (process.env.NODE_ENV === 'production') {
            Sentry.captureException(error, { extra: info });
        }
    }

    render() {
        if(this.state.error) {
            return <h1>Error 발생!</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;