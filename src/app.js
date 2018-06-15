import React from'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import styles from './app.scss';
import UrlPattern from 'url-pattern';

import TopBar from './components/top-bar/top-bar';
import Navigation from './components/navigation/navigation';

import ManageEventView from './views/manage-event-view/manage-event-view';
import DashboardContext from './models/dashboard-context';
import EventsView from './views/events-view/events-view';

const ManageEventUrlPattern = new UrlPattern('/events/manage(/:eventId)(/*)');

class RootComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dashboardContext: null
        };

        this.getContext = this.getContext.bind(this);
    }

    componentWillMount() {
        this.unlisten = this.props.history.listen(this.getContext);
        this.getContext(this.props.location);
    }

    componentWillUnmount() {
        this.unlisten();
    }

    getContext(location) {
        const eventMatch = ManageEventUrlPattern.match(location.pathname);

        if (eventMatch) {
            const context = new DashboardContext('manageEvent', eventMatch);

            if (this.state.dashboardContext !== context) {
                console.warn('Setting Dashboard Context', context);

                this.setState({
                    dashboardContext: context
                });
            }
        }

        if (!eventMatch && this.state.dashboardContext) {
            console.warn('Setting Dashboard Context', null);

            this.setState({
                dashboardContext: null
            });
        }
    }

    render() {
        return (
            <div className={styles.root}>
                <header>
                    <TopBar />
                </header>
                <nav>
                    <Navigation context={this.state.dashboardContext} />
                </nav>
                <main>
                    <Switch>
                        <Route exact path="/" render={() => <span>Hello home!</span>} />
                        <Route path="/events" component={EventsView} />
                        <Route path="/events/manage/:eventId" component={() => <ManageEventView context={this.state.dashboardContext} />} />
                    </Switch>
                </main>
            </div>
        )
    }
}

RootComponent = withRouter(RootComponent);

const App = () => (
    <BrowserRouter>
        <RootComponent />
    </BrowserRouter>
);

export default App;