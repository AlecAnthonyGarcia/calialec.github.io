import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Tabs,Tab} from 'material-ui/Tabs';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PortfolioCardList from './components/PortfolioCardList';
import AboutCard from './components/AboutCard';

const styles = {
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
    };
  }
  
  onTabActive(tab) {
    // track tab clicks
    ga('send', {
      hitType: 'event',
      eventCategory: 'Tab',
      eventLabel: tab.props.label
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        <AppBar
          title="Alec Garcia"
          showMenuIconButton={false}
          zDepth={0}
        />
        <Tabs>
        <Tab
          label="PORTFOLIO"
          onActive={this.onTabActive}
          >
          <PortfolioCardList/>
        </Tab>
        <Tab
          label="ABOUT"
          onActive={this.onTabActive}
          >
          <AboutCard/>
        </Tab>
        </Tabs>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
