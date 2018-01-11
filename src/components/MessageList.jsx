import React from 'react';
import mui from 'material-ui';
import Message from './Message.jsx';

var { card, list } = mui;

class MessageList extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        messages: [
          'hi there how are you?',
          'I am fine '
        ],
      };
    }
  render() {
    var messageNodes = this.state.messages.map((message) => {
      return (
        <Message message={message} />
      );
    });
    return (
      <card>
        <list>{messageNodes}</list>
      </card>
    )
  }
}

export default MessageList;