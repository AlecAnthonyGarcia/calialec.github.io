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
  }

  render() {
    return (
      <Card style={styles.aboutCard}>
      <CardMedia
        overlay={<CardTitle title="Alec Garcia" subtitle="Android Developer" />}
      >
      <img src="https://avatars0.githubusercontent.com/CaliAlec" />
      </CardMedia>
      
      <List>
      <ListItem
        leftIcon={<DocumentIcon color={indigo500} />}
        primaryText="Resume"
        secondaryText="View PDF"
      />
      </List>
      
      <Divider inset={true} />
      
      <List>
      <ListItem
        leftIcon={<PhoneIcon color={indigo500} />}
        primaryText="(805) 824 - 4646"
        secondaryText="Mobile"
        onTouchTap={()=>window.open("tel:8058244646")}
      />
      </List>
      
      <Divider inset={true} />
      
      <List>
      <ListItem
        leftIcon={<EmailIcon color={indigo500} />}
        primaryText="AlecAnthonyGarcia@gmail.com"
        secondaryText="Personal"
        onTouchTap={()=>window.open("mailto:AlecAnthonyGarcia@gmail.com")}
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
        onTouchTap={()=>window.open("https://github.com/CaliAlec")}
      />

      <ListItem
        leftIcon={<FontIcon className="icon icon-linkedin"/>}
        primaryText="LinkedIn"
        secondaryText="https://www.linkedin.com/in/AlecAnthonyGarcia"
        onTouchTap={()=>window.open("https://www.linkedin.com/in/AlecAnthonyGarcia")}
      />
      <ListItem
        leftIcon={<FontIcon className="icon icon-twitter"/>}
        primaryText="Twitter"
        secondaryText="https://twitter.com/CaliAlec"
        onTouchTap={()=>window.open("https://twitter.com/CaliAlec")}
      />
      <ListItem
        leftIcon={<FontIcon className="icon icon-facebook"/>}
        primaryText="Facebook"
        secondaryText="https://www.facebook.com/alec.garcia.505"
        onTouchTap={()=>window.open("https://www.facebook.com/alec.garcia.505")}
      />
      </List>
      </Card>
    );
  }
}

export default AboutCard;
