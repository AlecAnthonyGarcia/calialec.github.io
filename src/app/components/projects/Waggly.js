import React from 'react';
import {browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BackButton from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';

import ProjectCard from '../ProjectCard';

const styles = {
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
    primary1Color: '#82cd40'
  },
});

const imageArray = [
  {
    image: 'images/waggly/slide1_waggly.png',
    width: 1120,
    height: 1022
  },
  {
    image: 'images/waggly/slide2_waggly.png',
    width: 1120,
    height: 1022
  },
  {
    image: 'images/waggly/slide3_waggly.png',
    width: 1120,
    height: 1022
  },
  {
    image: 'images/waggly/slide4_waggly.png',
    width: 1120,
    height: 1022
  },
  {
    image: 'images/waggly/slide5_waggly.png',
    width: 1120,
    height: 1022
  },
  {
    image: 'images/waggly/slide6_waggly.png',
    width: 1120,
    height: 1022
  },
  {
    image: 'images/waggly/slide7_waggly.png',
    width: 1120,
    height: 1022
  },
  {
    image: 'images/waggly/slide8_waggly.png',
    width: 519,
    height: 543
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

class Waggly extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
    };
  }

  render() {

    const description = (
      <div>
      My former colleague Hanna Xu and I built Waggly at the LAUNCH hackathon in 2014.
      I developed the Android application from scratch within 48 hours. Hanna designed and pitched.
      <br/><br/>
      Our team received a cumulative score of 9.3/10 from the judges.
      <br/><br/>
      Finding doggy playmates is hard, but dog socialization is an important part of dog ownership.
      Waggly makes it quick and simple to find playmates nearby for your dog.
      </div>
    );
    
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        <AppBar
          title="Waggly"
          iconElementLeft={<IconButton onClick={() => onBackPressed()}><BackButton/></IconButton>}
          onLeftIconButtonTouchTap={onBackPressed}
        />
        
        <ProjectCard
          heroImage={'images/waggly/project_card_hero_waggly.png'}
          title={'Waggly'}
          subtitle={'Android Application'}
          text={description}
          imageArray={imageArray}
        />

        </div>
      </MuiThemeProvider>
    );
  }
}

export default Waggly;
