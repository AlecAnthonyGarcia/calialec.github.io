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
    primary1Color: '#4b92c4'
  },
});

const imageArray = [
  {
    image: 'images/entangled/slide1_entangled.png',
    width: 320,
    height: 568
  },
  {
    image: 'images/entangled/slide2_entangled.png',
    width: 320,
    height: 568
  },
  {
    image: 'images/entangled/slide3_entangled.png',
    width: 320,
    height: 568
  },
  {
    image: 'images/entangled/slide4_entangled.png',
    width: 320,
    height: 568
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

class Entangled extends React.Component {
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
            secondaryText="http://EntangledApp.com/"
            ref={(ref) => this.listItem.push(ref)}
            onTouchTap={()=>this.onListItemTouchTap(0)}
            />
        </List>
        
        <Divider inset={true} />
        
        <List>
          <ListItem
            leftIcon={<FontIcon className="icon icon-link"/>}
            primaryText="TechCrunch Article"
            secondaryText="http://techcrunch.com/2015/09/20/entangled-is-a-watch-app-to-fight-loneliness/"
            ref={(ref) => this.listItem.push(ref)}
            onTouchTap={()=>this.onListItemTouchTap(1)}
            />
          <ListItem
            leftIcon={<FontIcon className="icon icon-link"/>}
            primaryText="Devpost Submission"
            secondaryText="http://devpost.com/software/entangled/"
            ref={(ref) => this.listItem.push(ref)}
            onTouchTap={()=>this.onListItemTouchTap(2)}
            />
        </List>
      </div>
    );

    const description = (
      <div>
        My good friend Freddie Iboy and I worked on Entangled at TechCrunch Disrupt SF 2015. I developed the watch face
        and companion handheld app that talks to Parse. I also implemented the backend logic on Parse, to keep track
        of users and sent interaction messages. Freddie designed and pitched.
        <br/><br/>
        Entangled's first function is to anonymously connect you to someone random in the world.
        Its second function is as a watch face that tells the time beautifully.
        <p>
          You can interact with the other person in three simple ways:
          <ul>
            <li>Emojis</li>
            <li>Taps</li>
            <li>Pre-created messages</li>
          </ul>
          You can access the interaction options from the outer ring of the watch face.
        </p>
        The feeling of being connected to someone whom you can interact with on your watch passively solves loneliness because
        you feel like there's always someone there with you.
      </div>
    );
    
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        <AppBar
          title="Entangled"
          iconElementLeft={<IconButton onClick={() => onBackPressed()}><BackButton/></IconButton>}
          onLeftIconButtonTouchTap={onBackPressed}
        />
        
        <ProjectCard
          heroImage={'images/entangled/project_card_hero_entangled.png'}
          title={'Entangled'}
          subtitle={'Android Watch Face'}
          text={description}
          imageArray={imageArray}
          optionsList={optionsList}
        />

        </div>
      </MuiThemeProvider>
    );
  }
}

export default Entangled;
