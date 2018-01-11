import React from 'react';
import mui from 'material-ui';
import Channel from './Channel.jsx';

var { card, list } = mui;

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [
                'Muse',
                'Reactors'
            ],
        };
    }
    render() {
        var channelNodes = this.state.channels.map((channel) => {
            return (
                <Channel channel={channel} />
            );
        });
        return (
            <card style={{
                flexGrow:1
            }}>
                <list>{channelNodes}</list>
            </card>
        )
    }
}

export default ChannelList;