import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'
import Section3 from '/home/ubuntu/ict/project/src/components/section3.js'

class Random extends Component {

    render() {
        return (
            <div>
                <Header />
                <Section3 />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Random;