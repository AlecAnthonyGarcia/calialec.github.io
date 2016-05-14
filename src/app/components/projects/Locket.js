import React from 'react';
import {browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import {deepOrange500} from 'material-ui/styles/colors';
import {indigo500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BackButton from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ActionHome from 'material-ui/svg-icons/action/home';

import ProjectCard from '../ProjectCard';

const styles = {
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
    primary1Color: '#20bfdc'
  },
});

const imageArray = [
  {
    image: 'images/locket/slide1_locket.png',
    width: 524,
    height: 900
  },
  {
    image: 'images/locket/slide2_locket.png',
    width: 524,
    height: 900
  },
  {
    image: 'images/locket/slide3_locket.png',
    width: 524,
    height: 900
  },
  {
    image: 'images/locket/slide4_locket.png',
    width: 524,
    height: 900
  },
  {
    image: 'images/locket/slide5_locket.png',
    width: 524,
    height: 900
  },
  {
    image: 'images/locket/slide6_locket.png',
    width: 1468,
    height: 4820
  }
];

function onBackPressed() {
  // track the back button click
  ga('send', {
    hitType: 'event',
    eventCategory: 'Back Button',
    eventLabel: window.location.pathname
  });
  browserHistory.push('/');
}
class Locket extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
    };
    
    this.listItem = [];
  }

  onListItemTouchTap(index) {
    // track the list item clicks
    ga('send', {
      hitType: 'event',
      eventCategory: 'Portfolio Project Card List Item',
      eventAction: this.listItem[index].props.primaryText,
      eventLabel: this.listItem[index].props.secondaryText
    });
    window.open(this.listItem[index].props.secondaryText);
  }

  render() {
    
    const optionsList = (
      <div>
      <List>
        <ListItem
          leftIcon={<ActionHome color={indigo500} />}
          primaryText="Website"
          secondaryText="http://getlocket.com"
          ref={(ref) => this.listItem.push(ref)}
          onTouchTap={()=>this.onListItemTouchTap(0)}
        />
      </List>
      
      <Divider inset={true} />
      
      <List>
        <ListItem
          leftIcon={<FontIcon className="icon icon-android"/>}
          primaryText="Archived Google Play Listing"
          secondaryText="https://web.archive.org/web/20151025190509/https://play.google.com/store/apps/details?id=com.locket.matterhorn"
          ref={(ref) => this.listItem.push(ref)}
          onTouchTap={()=>this.onListItemTouchTap(1)}
        />
      </List>
      
      <Divider inset={true} />
      
      <List>
        <ListItem
          leftIcon={<FontIcon className="icon icon-link"/>}
          primaryText="TechCrunch Article"
          secondaryText="http://techcrunch.com/2013/11/19/tyra-banks-invests-in-locket-the-app-that-brings-ads-and-other-content-to-android-lockscreens/"
          ref={(ref) => this.listItem.push(ref)}
          onTouchTap={()=>this.onListItemTouchTap(2)}
        />
      </List>
      </div>
    );
    
    const description = (
      <div>
        Locket was selected as one of the "Best Apps of 2014" by Google, and acquired by mobile shopping app Wish in 2015.
        I contributed to the development of the product during all its phases/pivots with the rest of the team.
        
          <Subheader>Locket Phases:</Subheader>
          <ul>
            <li>Original pay-per-swipe model: paid users a penny every time they unlocked phones in return for viewing advertisements on their lock screen.</li>
            <li>Locket Cast: Allowed users (internal, curated, and celebrities) to "cast" content to Locket user's lock screens.</li>
            <li>Locket 2.0: Allowed users to swipe through multiple lock screen images featuring news curated and designed by Locket.</li>
          </ul>
        
      </div>
    );
    
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        <AppBar
          title="Locket"
          iconElementLeft={<IconButton onClick={() => onBackPressed()}><BackButton/></IconButton>}
          onLeftIconButtonTouchTap={onBackPressed}
        />
        
        <ProjectCard
          heroImage={'images/locket/project_card_hero_locket.png'}
          title={'Locket'}
          subtitle={'Android Application'}
          text={description}
          imageArray={imageArray}
          optionsList={optionsList}
        />

        </div>
      </MuiThemeProvider>
    );
  }
}

export default Locket;
