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
import Divider from 'material-ui/Divider';
import ActionHome from 'material-ui/svg-icons/action/home';
import Subheader from 'material-ui/Subheader';

import ProjectCard from '../ProjectCard';

const styles = {
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
    primary1Color: '#E12D4D'
  },
});

const imageArray = [
  {
    image: 'images/impulse/slide1_impulse.png',
    width: 900,
    height: 900
  },
  {
    image: 'images/impulse/slide2_impulse.png',
    width: 900,
    height: 900
  },
  {
    image: 'images/impulse/slide3_impulse.png',
    width: 900,
    height: 900
  },
  {
    image: 'images/impulse/slide4_impulse.png',
    width: 900,
    height: 900
  },
  {
    image: 'images/impulse/slide5_impulse.png',
    width: 900,
    height: 900
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

class Impulse extends React.Component {
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
            secondaryText="http://impulse.life"
            ref={(ref) => this.listItem.push(ref)}
            onTouchTap={()=>this.onListItemTouchTap(0)}
            />
        </List>
        
        <Divider inset={true} />
        
        <List>
          <ListItem
            leftIcon={<FontIcon className="icon icon-android"/>}
            primaryText="Google Play Store Listing"
            secondaryText="https://play.google.com/store/apps/details?id=life.impulse.impulse"
            ref={(ref) => this.listItem.push(ref)}
            onTouchTap={()=>this.onListItemTouchTap(1)}
            />
        </List>
      </div>
    );
    
    const description = (
      <div>
        <Subheader>About</Subheader>
        Impulse helps you discover spontaneous activities with your friends and people nearby.
        Users can post their current desired "impulse" (activity) to a local feed. There are
        four broad categories that allow quick discovery of specific activities. People who are
        interested in your activity can "jolt" your impulse to express their interest, and if you
        accept their jolt, you are free to chat within the app to coordinate a place to meet up.
        <Subheader>Backstory</Subheader>
        After the startup I was working for, Locket, got acquired by Wish, I had time to work
        on my own projects. When I first moved to San Francisco, I didn't really know anyone
        besides my coworkers. I came up with the idea for Impulse because I felt somewhat lonely,
        and wanted to find people to do things with, like watch a movie, or get something to eat.
        I wanted to build something that allowed people to find someone interested in the same thing
        as them, <i>right now</i>, in the moment.
        <br/><br/>
        I started working on my idea, and discussed it with my friend Nathaniel Medina, who is a student
        at UC Berkeley. Together, we refined my original idea to what Impulse is today, and I moved
        from SF to Berkeley and started working on Impulse full-time. I developed the full stack for the
        app, implementing the backend and building & designing the Android application.
        <Subheader>Achievements</Subheader>
        I was responsible for all the product development and design, but my friend Nate contributed by getting
        us into Free University, a program by Free Ventures, which is a UC Berkeley student-run accelerator.
        In Free University, we were invited to weekly "hack sessions" where we could work in an environment with
        other student founders. Nate also helped Impulse become a client of the New Business Practicum at
        Berkeley Law, which provided us with free legal consultation. In conclusion, we also made it to the
        final round of Foundation Capital's Berkeley Founder's Program, where we pitched in front of a panel of judges.
        <Subheader>Current Status</Subheader>
        After beta testing with a group of friends, I released Impulse on the Google Play Store. Currently, you
        have to be a UC Berkeley student to use the app. There are a lot of competitors moving into this space,
        so development and user acquisition/marketing is on a hiatus until a proper go-to-market strategy is realized.
      </div>
    );
    
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        <AppBar
          title="Impulse"
          iconElementLeft={<IconButton onClick={() => onBackPressed()}><BackButton/></IconButton>}
          onLeftIconButtonTouchTap={onBackPressed}
        />
        
        <ProjectCard
          heroImage={'images/impulse/project_card_hero_impulse.png'}
          title={'Impulse'}
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

export default Impulse;
