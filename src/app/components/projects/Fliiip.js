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

import ProjectCard from '../ProjectCard';

const styles = {
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
    primary1Color: '#f94139'
  },
});

const imageArray = [
  {
    image: 'images/fliiip/slide1_fliiip.png',
    width: 695,
    height: 494
  }
];

const optionsList = (
  <div>
  <List>
    <ListItem
    leftIcon={<FontIcon className="icon icon-link"/>}
    primaryText="Devpost Submission"
    secondaryText="http://devpost.com/software/fliiip"
    onTouchTap={()=>window.open("http://devpost.com/software/fliiip")}
    />
  </List>
  </div>
);

function onBackPressed() {
  browserHistory.push('/');
}

class Fliiip extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
    };
  }

  render() {
    
    const description = (
      <div>
        My good friend Freddie Iboy and I came in 4th place in the Heroku category and won $20,000 at the Salesforce $1 Million Hackathon with fliiip.
        I developed the Android application and backend in Java which pings the Yelp API for nearby restaurants.
        <p>
          Freddie and I wanted to build a product that answered the question: <i>"What should I eat today?"</i>
        </p>
        We wanted to solve the paradox of choice that occurs when deciding what to eat, so we built fliiip.
        Since an abundance of options paradoxically produces paralysis, fliiip simply shows you 3 images of food you may want to eat so you can decide quickly.
        Tapping on one of the images shows you more information about the restaurant.
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        <AppBar
          title="fliiip"
          iconElementLeft={<IconButton onClick={() => onBackPressed()}><BackButton/></IconButton>}
          onLeftIconButtonTouchTap={onBackPressed}
        />
        
        <ProjectCard
          heroImage={'images/fliiip/project_card_hero_fliiip.png'}
          title={'fliiip'}
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

export default Fliiip;
