import React, { Component } from 'react';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Add from './Add';
import Linking from './Linking';
export default class About extends Component {
    render() {
        return (
            <div>
            <Router>
                <div>
                   <hr/>
                    <Link to="/category"  className="btn btn-info">Linking</Link>&nbsp;
                    <Link to="/category/Add"  className="btn btn-info">Add</Link>
                    <Route exact path="/category" component={Linking} />
                    <Route exact path="/category/Add" component={Add} />
                </div>
            </Router>
            </div>
          
        );
    }
}

