import React, { Component } from 'react';

class Status extends Component {
    constructor() {
        super();
        this.state = {
            connectionStatus: ""
        };
    }

    componentDidMount() {
        fetch('/connection').then(res =>{
            this.setState(res);
            console.log("Response : " + res);
        })
            // .then(res => res.json())
            // .then(connectionStatus => this.setState({connectionStatus}, () => console.log('Connection: ', connectionStatus)));
    }

    render() {
        return (
            <div>
                <h2>Status</h2>
                <p>
                    {this.state.connectionStatus + ""}
                </p>
            </div>
        );
    }
}

export default Status;
