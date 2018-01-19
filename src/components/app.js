import React, { Component } from 'react';

import { Navigation } from './navigation';
import { NavigationToggle } from './navigation-toggle';
import { Overlay } from './overlay';
import { SplashScreen } from '../screens/splash';

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = { navigationActive: false };

        this.toggleNavigation = this.toggleNavigation.bind(this);
    }

    componentDidMount() {
        // When the app.js component mounts it fires an event called 'appReady'
        // the index.html file uses this event to clear out the critical styles and remove the app preloader
        const event = new CustomEvent('appReady', { bubbles: true, cancelable: false });
        document.dispatchEvent(event);
    }

    toggleNavigation() {
        this.setState({ navigationActive: !this.state.navigationActive });
    }

    render() {
        const { navigationActive } = this.state;
        
        return (
            <div className={`app${navigationActive ? ' app--navigation-active' : ''}`}>
                <div className='app__screen'>
                    <Overlay active={navigationActive} onClick={this.toggleNavigation} />
                    <SplashScreen />
                </div>
                <NavigationToggle onClick={this.toggleNavigation} navigationActive={navigationActive} />
                <Navigation active={navigationActive} />
            </div>
        );
    }
}
