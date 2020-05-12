import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Index extends Component {
    render() {
        return (
            <div className="container">
            <Header />
                <div className="row justify-content-center">
                    <div className="col-md-8">
                       
                    </div>
                </div>
                 <Footer />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
