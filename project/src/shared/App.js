import React, { Component } from 'react';
import Home from '/home/ubuntu/ict/project/src/pages/Home.js';
import { BrowserRouter, Route } from 'react-router-dom';



class App extends Component {
    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <Route path="/" component={Home} exact />
                </BrowserRouter>
            </div>
        );
    }
}
export default App;