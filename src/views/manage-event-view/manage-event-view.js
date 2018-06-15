import React from 'react';

class ManageEventView extends React.Component {
    render() {
        return (
            <p>{JSON.stringify(this.props.context)}</p>
        )
    }
}

export default ManageEventView;