import React from 'react';
import { NavLink } from 'react-router-dom';

import EventsFetcher from '../../services/events-fetcher/events-fetcher';

class EventsView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        }
    }

    componentDidMount() {
        EventsFetcher.getEvents()
            .then((result) => {
                this.setState({
                    events: result
                })
        });
    }

    render() {
        return (
            <div>
                { this.state.events.map((event, i) =>
                    <div key={i}>
                        <NavLink to={`/events/manage/${event.id}`}>{event.name}</NavLink>
                    </div>)
                }
            </div>
        )
    }
}
export default EventsView;