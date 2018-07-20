import React, { Component } from 'react';
import './PMLogin.css'
import Button from '@material-ui/core/Button';
//import axios from 'axios'


class PMLogin extends Component {
    // Adds a class constructor that assigns the initial state values:
    constructor () {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <div className="container is-widescreen has-text-centered">
            
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            </div>
            
        );
      }
}
export default PMLogin;