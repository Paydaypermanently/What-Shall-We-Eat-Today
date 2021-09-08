import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Homemeal_Section from '/home/ubuntu/ict/project/src/components/homemeal_section.js'
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'

class Homemeal extends Component {

    render() {
        return (
            <div>
                <Header />
                <Homemeal_Section />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Homemeal;