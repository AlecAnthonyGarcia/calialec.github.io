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
import ActionHome from 'material-ui/svg-icons/action/home';

import ProjectCard from '../ProjectCard';

const styles = {
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
    primary1Color: '#f44336'
  },
});

const imageArray = [
  {
    image: 'images/still-alive/slide1_still_alive.png',
    width: 1440,
    height: 2560
  },
  {
    image: 'images/still-alive/slide2_still_alive.png',
    width: 1440,
    height: 2560
  },
  {
    image: 'images/still-alive/slide3_still_alive.png',
    width: 1440,
    height: 2560
  },
  {
    image: 'images/still-alive/slide4_still_alive.png',
    width: 1440,
    height: 2560
  },
  {
    image: 'images/still-alive/slide5_still_alive.png',
    width: 1440,
    height: 2560
  },
  {
    image: 'images/still-alive/slide6_still_alive.png',
    width: 1440,
    height: 2560
  }
];

const optionsList = (
  <div>
  <List>
    <ListItem
    leftIcon={<FontIcon className="icon icon-github"/>}
    primaryText="GitHub"
    secondaryText="https://github.com/CaliAlec/Capstone-Project"
    onTouchTap={()=>window.open("https://github.com/CaliAlec/Capstone-Project")}
    />
  </List>
  </div>
);

function onBackPressed() {
  browserHistory.push('/');
}

class StillAlive extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
    };
  }

  render() {
    
    const description = (
      <div>
        I developed Still Alive for my final "Capstone Project" for Udacity's Android
        Developer Nanodegree.
        <p>
          You can schedule specific messages to specific people on specific days at specific times. When the time comes, Still Alive will send you a
          notification asking if you are indeed still alive. When you confirm your aliveness, the app will send your message to the recipient.
        </p>
        The intended user for Still Alive is anyone who wants to let people who worry about them know they are okay. For example, students who just
        left for college who have moms that message them every day and ask if they are okay.
      </div>
    );
    
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        <AppBar
          title="Still Alive"
          iconElementLeft={<IconButton onClick={() => onBackPressed()}><BackButton/></IconButton>}
          onLeftIconButtonTouchTap={onBackPressed}
        />
        
        <ProjectCard
          heroImage={'images/still-alive/project_card_hero_still_alive.png'}
          title={'Still Alive'}
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

export default StillAlive;
