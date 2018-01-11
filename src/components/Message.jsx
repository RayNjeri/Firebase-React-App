import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>{this.props.Message}</div>
        )
    }
}

export default Message;