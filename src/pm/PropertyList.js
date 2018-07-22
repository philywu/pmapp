import React , { Component } from 'react';

import './PropertyList.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import axios from 'axios'


class PropertyList extends Component {
  // Adds a class constructor that assigns the initial state values:
  constructor () {
      super();
      this.state = {
        propertyListData:[]
      };
      
  }
 
  
   componentWillMount() {
    var url = 'http://localhost:8000/api/properties';
    var propList ;
    
    axios.get(url)
    .then(response => {
      console.log(response.data);
      propList = response.data;
      this.setState({  
        propertyListData : response.data
      });
      
    })
    .catch(error => {
      console.log(error)
  });
   
    
  }

render () {
  // const styles = theme => ({
  //   root: {
  //     width: '100%',
  //     maxWidth: 360,
  //     backgroundColor: theme.palette.background.paper,
  //   },
  // });
   const { classes } = this.props;
   var listItems = [];
   if ( this.state.propertyListData){
     listItems = this.state.propertyListData.map((item) => 
      <ListItem className="card" key={item._id}>
      <Avatar>
        <ImageIcon />
      </Avatar>
      <ListItemText primary={item.name} secondary={item.address} />
    </ListItem>

     );
   }
  return (
    
    <div >
      <List>
       {listItems}
      </List>
    </div>
  );
}
}
export default PropertyList;
//export default withStyles(styles)(PropertyList);
