import React from "react"

class ErrorBoundary extends React.Component {

    state = { error : null}

    static getDerivedStateFromError(error){
        return {error};
    }

    componentDidCatch(error, errorInfo){
        console.group("componentDidCatch");
        console.log(error);
        console.log(errorInfo);
        console.groupEnd();
    }
    render() {
        const { error }  = this.state;
        if ( error !== null) {
            return (
                <div>
                    <h2>somethine went wrong</h2>
                </div>
            );
        }else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;