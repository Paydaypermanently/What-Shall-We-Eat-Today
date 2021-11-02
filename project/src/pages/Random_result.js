import React, { Component } from 'react';
import Header from '/home/ubuntu/ict/project/src/components/header.js'
import Random_result_section from '/home/ubuntu/ict/project/src/components/Random_result_section';
import Share from '/home/ubuntu/ict/project/src/components/share.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'

class Random_result extends Component {

    render() {
        return (
            <div>
                <Header />
                <Random_result_section />
                <Share />
                <Nav />
            </div>
        );
    }
}

export default Random_result;