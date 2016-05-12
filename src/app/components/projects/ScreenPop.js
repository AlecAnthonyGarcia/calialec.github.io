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

import ProjectCard from '../ProjectCard';

const styles = {
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
    primary1Color: '#00b9e7'
  },
});

const imageArray = [
  {
    image: 'images/screenpop/slide1_screenpop.png',
    width: 600,
    height: 900
  },
  {
    image: 'images/screenpop/slide2_screenpop.png',
    width: 1153,
    height: 900
  },
  {
    image: 'images/screenpop/slide3_screenpop.png',
    width: 600,
    height: 900
  },
  {
    image: 'images/screenpop/slide4_screenpop.png',
    width: 600,
    height: 900
  },
  {
    image: 'images/screenpop/slide5_screenpop.png',
    width: 506,
    height: 900
  },
  {
    image: 'images/screenpop/slide6_screenpop.png',
    width: 506,
    height: 900
  },
  {
    image: 'images/screenpop/slide7_screenpop.png',
    width: 1471,
    height: 4293
  },
  {
    image: 'images/screenpop/slide8_screenpop.png',
    width: 1471,
    height: 4372
  }
];

const optionsList = (
  <div>
  <List>
    <ListItem
      leftIcon={<FontIcon className="icon icon-android"/>}
      primaryText="Archived Google Play Store Listing"
      secondaryText="https://web.archive.org/web/20151014022914/https://play.google.com/store/apps/details?id=com.screenpop.android"
      onTouchTap={()=>window.open("https://web.archive.org/web/20151014022914/https://play.google.com/store/apps/details?id=com.screenpop.android")}
      />
  </List>
  <Divider inset={true} />
  <List>
    <ListItem
      leftIcon={<FontIcon className="icon icon-link"/>}
      primaryText="TechCrunch Article"
      secondaryText="http://techcrunch.com/2015/02/10/screenpop-backed-by-3-2-million-lets-you-message-friends-from-your-phones-lockscreen/"
      onTouchTap={()=>window.open("http://techcrunch.com/2015/02/10/screenpop-backed-by-3-2-million-lets-you-message-friends-from-your-phones-lockscreen/")}
    />
  </List>
  <Divider inset={true} />
    <List>
      <ListItem
        leftIcon={<FontIcon className="icon icon-youtube"/>}
        primaryText="YouTube Marketing Video"
        secondaryText="https://www.youtube.com/watch?v=7Llv-dKioGY"
        onTouchTap={()=>window.open("https://www.youtube.com/watch?v=7Llv-dKioGY")}
      />
    </List>
    <List>
      <ListItem
        leftIcon={<FontIcon className="icon icon-youtube"/>}
        primaryText="YouTube App Tutorial Video"
        secondaryText="https://www.youtube.com/watch?v=h7Ri1uMYbEw"
        onTouchTap={()=>window.open("https://www.youtube.com/watch?v=h7Ri1uMYbEw")}
      />
    </List>
  </div>
);

function onBackPressed() {
  browserHistory.push('/');
}

class ScreenPop extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
    };
  }

  render() {
    
    const description = (
      <div>
        ScreenPop allowed you to send pictures to your friend's lock screens. When you woke your phone up, the ScreenPop lock screen was shown.
        If the user had pending messages, they could swipe the lock screen to page through the photos that were sent to them. The user could then
        swipe left to launch the camera, or right to unlock their phone.
        <p>
          The idea behind ScreenPop came about when Locket was brainstorming new mediums for lock screen content. After the team came up with the idea
          to send photos to other people's lock screens, I quickly developed a working prototype entirely by myself. After some internal testing, the
          other engineers and I polished the app up and released it on the Play Store as an experiment called "Bunch".
        </p>
        After seeing pretty good growth metrics, we decided to rebrand Bunch as "ScreenPop". I ended up implementing the majority of the UI for ScreenPop.
      </div>
    );
    
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        <AppBar
          title="ScreenPop"
          iconElementLeft={<IconButton onClick={() => onBackPressed()}><BackButton/></IconButton>}
          onLeftIconButtonTouchTap={onBackPressed}
        />
        
        <ProjectCard
          heroImage={'images/screenpop/project_card_hero_screenpop.png'}
          title={'ScreenPop'}
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

export default ScreenPop;
