import React, { Component } from 'react';
import fire from './config/Fire';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
        <div>
            <h1>You Are Home</h1>
            <button onClick={() => fire.auth().signOut()}>Sign out</button>
        </div>

           
);

    }

}

export default Home;