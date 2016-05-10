import React from 'react';
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';

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
      text
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

    </Card>
    );
  }
}

export default PortfolioCard;
