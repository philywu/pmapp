import React, { Component } from 'react';
import './PMAppShell.css'
import ButtonAppBar from './ButtonAppBar.js'
import Button from '@material-ui/core/Button';
import PropertyList from './PropertyList';



class PMAppShell extends Component {
    // Adds a class constructor that assigns the initial state values:
    constructor () {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <div className="container is-widescreen has-text-centered">
                <ButtonAppBar />
                <br />
                
                <PropertyList />
            </div>
            
        );
      }
}
export default PMAppShell;