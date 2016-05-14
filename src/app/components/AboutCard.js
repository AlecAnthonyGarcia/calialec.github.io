import React from 'react';
import {indigo500} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import DocumentIcon from 'material-ui/svg-icons/action/description';
import PhoneIcon from 'material-ui/svg-icons/communication/call';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import LocationIcon from 'material-ui/svg-icons/maps/place';

const styles = {
  aboutCard: {
    maxWidth: '344px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
    marginBottom: '10px'
  }
};

class AboutCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
    };
    
    this.listItem = [];
  }
  
  onListItemTouchTap(index, location) {
    // track the list item clicks
    ga('send', {
      hitType: 'event',
      eventCategory: 'About Card List Item',
      eventAction: this.listItem[index].props.primaryText,
      eventLabel: this.listItem[index].props.secondaryText
    });
    if(location) {
      window.open(location)
    } else {
      window.open(this.listItem[index].props.secondaryText);
    }    
  }

  render() {
    return (
      <Card style={styles.aboutCard}>
      <CardMedia
        overlay={<CardTitle title="Alec Garcia" subtitle="Android Developer" />}
      >
      <img src="https://avatars0.githubusercontent.com/CaliAlec" />
      </CardMedia>
      
      <CardText>
        Hey, I'm Alec, a developer based in the Bay Area.
        <br/><br/>
          I was born in California but grew up in Colorado. I moved back to California when I started high school.
          In high school, I participated in the FIRST Robotics Competition.
          <br/><br/>
          In college, I pursued a Computer Science Degree, but I took a leave of absence during my sophomore year after receiving an
          internship for white-hat hacking a startup called Locket. I was promoted to a full-time position and I worked at
          Locket for 1.5 years.
          <br/><br/>
          Recently, Locket was acquired by Wish, so I spent the last year working on my own projects and I achieved an
          Android Developer Nanodegree from Udacity.
          Now, I'm excited to get back into the workforce and build awesome things.
      </CardText>
      
      <List>
      <ListItem
        leftIcon={<DocumentIcon color={indigo500} />}
        primaryText="Resume"
        secondaryText="View PDF"
        ref={(ref) => this.listItem.push(ref)}
        onTouchTap={()=>this.onListItemTouchTap(0, "resume.pdf")}
      />
      </List>
      
      <Divider inset={true} />
      
      <List>
      <ListItem
        leftIcon={<PhoneIcon color={indigo500} />}
        primaryText="(805) 824 - 4646"
        secondaryText="Mobile"
        ref={(ref) => this.listItem.push(ref)}
        onTouchTap={()=>this.onListItemTouchTap(1, "tel:8058244646")}
      />
      </List>
      
      <Divider inset={true} />
      
      <List>
      <ListItem
        leftIcon={<EmailIcon color={indigo500} />}
        primaryText="AlecAnthonyGarcia@gmail.com"
        secondaryText="Personal"
        ref={(ref) => this.listItem.push(ref)}
        onTouchTap={()=>this.onListItemTouchTap(2, "mailto:AlecAnthonyGarcia@gmail.com")}
      />
      </List>
      
      <Divider inset={true} />
      
      <List>
      <ListItem
        leftIcon={<LocationIcon color={indigo500} />}
        primaryText="Berkeley, CA"
        secondaryText="Current Residence"
        disabled={true}
      />
      </List>
      
      <Divider inset={true} />
      
      <List>
      <ListItem
        leftIcon={<FontIcon className="icon icon-github"/>}
        primaryText="GitHub"
        secondaryText="https://github.com/CaliAlec"
        ref={(ref) => this.listItem.push(ref)}
        onTouchTap={()=>this.onListItemTouchTap(3)}
      />

      <ListItem
        leftIcon={<FontIcon className="icon icon-linkedin"/>}
        primaryText="LinkedIn"
        secondaryText="https://www.linkedin.com/in/AlecAnthonyGarcia"
        ref={(ref) => this.listItem.push(ref)}
        onTouchTap={()=>this.onListItemTouchTap(4)}
      />
      <ListItem
        leftIcon={<FontIcon className="icon icon-twitter"/>}
        primaryText="Twitter"
        secondaryText="https://twitter.com/CaliAlec"
        ref={(ref) => this.listItem.push(ref)}
        onTouchTap={()=>this.onListItemTouchTap(5)}
      />
      <ListItem
        leftIcon={<FontIcon className="icon icon-facebook"/>}
        primaryText="Facebook"
        secondaryText="https://www.facebook.com/alec.garcia.505"
        ref={(ref) => this.listItem.push(ref)}
        onTouchTap={()=>this.onListItemTouchTap(6)}
      />
      </List>
      </Card>
    );
  }
}

export default AboutCard;
