import React from 'react';
import {browserHistory} from 'react-router';
import $ from "jquery";
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  projectCard: {
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  gridList: {
    overflowY: 'auto'
  }
};

class ProjectCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
    };
  }
  
  getPswpElement(callback) {
    // if photoswipe element exists, return it
    if($('#pswp').length) {
      callback(document.getElementById('pswp'));
    } else {
      // photoswipe element doesn't exist, inject it
      $("#pswpContainer").load("../photoswipe.html", function() {
        callback(document.getElementById('pswp'));
      });
    }
  }
  
  showImageGallery(imageIndex) {
    var itself = this;
    
    // track image gallery clicks
    ga('send', {
      hitType: 'event',
      eventCategory: 'Portfolio Project Card Image Item',
      eventLabel: itself.props.imageArray[imageIndex.index].image
    });
    
    this.getPswpElement(function(pswpElement) {
      var slides = [];
      
      itself.props.imageArray.map((tile) => {
        slides.push({
          src: tile.image,
          msrc: tile.image,
          w: tile.width,
          h: tile.height
        });
      });
      
      var options = {
        index: imageIndex.index,
        closeOnScroll: false,
        shareEl: false
      };
      
      var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, slides, options);
      gallery.init();
    });
    
  }

  render() {

    const {
      heroImage,
      title,
      subtitle,
      text,
      imageArray,
      optionsList
    } = this.props;

    return (
      <Card style={styles.projectCard}>
      
      <CardMedia>
        <img src={heroImage} />
      </CardMedia>
      
      <CardTitle title={title} subtitle={subtitle} />
      
      <CardText>
      {text}
      </CardText>
      
      <GridList
      cellHeight={200}
      style={styles.gridList}
      >
      
      {imageArray.map((tile, index) => (
        
        <GridTile
        key={tile.image}
        onClick={()=>this.showImageGallery({index})}
        >
        <img src={tile.image} />
        </GridTile>
        
      ))}
      
      </GridList>
      
      {optionsList}
      
      </Card>
    );
  }
}

export default ProjectCard;
