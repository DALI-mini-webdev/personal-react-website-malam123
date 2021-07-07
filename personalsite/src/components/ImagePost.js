import React, { Component } from 'react';

class ImagePost extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }
 render() {
   return (
     <div>
       <img src={ this.props.newImage } alt='Image'/>
     </div>
   )
 }
}
export default ImagePost;