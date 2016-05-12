import React from 'react';
import {browserHistory} from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  portfolioCard: {
    marginBottom: '20px'
  }
};

class PortfolioCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
    };
  }

  render() {

    const {
      headerTitle,
      headerSubtitle,
      headerAvatar,
      image,
      text,
      infoRoute
    } = this.props;

    return (
      <Card style={styles.portfolioCard}>
      
      <CardHeader
        title={headerTitle}
        subtitle={headerSubtitle}
        avatar={headerAvatar}
      />
      
      <CardMedia>
        <img src={image} />
      </CardMedia>
      
      <CardText>
        {text}
      </CardText>
      
      <CardActions>
        <FlatButton label="LEARN MORE" onClick={()=>browserHistory.push(infoRoute)} />
      </CardActions>
      
    </Card>
    );
  }
}

export default PortfolioCard;
