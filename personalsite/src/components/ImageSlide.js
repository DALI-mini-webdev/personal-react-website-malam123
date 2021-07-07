import React, { Component } from 'react'
import pic0 from '/Users/mirshadmanalam/Desktop/personal-react-website-malam123/personalsite/src/components/images/IMG_3078 copy.jpg'
import pic1 from '/Users/mirshadmanalam/Desktop/personal-react-website-malam123/personalsite/src/components/images/IMG_3118.jpeg'
import pic2 from '/Users/mirshadmanalam/Desktop/personal-react-website-malam123/personalsite/src/components/images/IMG_3425 copy.jpg'
import pic3 from '/Users/mirshadmanalam/Desktop/personal-react-website-malam123/personalsite/src/components/images/IMG_4384.jpeg'
import ImagePost from '/Users/mirshadmanalam/Desktop/personal-react-website-malam123/personalsite/src/components/ImagePost.js'

class ImageSlide extends Component{
    constructor(props){
        super(props)

        this.onClickForward = this.onClickForward.bind(this)
        this.onClickBack = this.onClickBack.bind(this)

        const img0 = pic0;
        const img1 = pic1;
        const img2 = pic2;
        const img3 = pic3;

        this.state = {
            index: 0,
            imgList: [img0, img1, img2, img3],
            newImage:'',
            newImageID:''
        }
    }
    onClickForward() {
        if (this.state.index + 1 === this.state.imgList.length) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }
    onClickBack() {
        if(this.state.index - 1 === -1) {
            this.setState({
                index: this.state.imgList.length - 1
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }
    
        

    newImageFunction = (event) => {
        this.setState({ newImage: event.target.value });
      }
     
    
    AddImage = () => {
        this.setState(state => {
            state.imgList = state.imgList.concat(state.newImage);
        }
        )
    }

    render(){
        return(
            <div>
            

            <img src={this.state.imgList[this.state.index]} alt="" height="300"/><br />
                <button onClick={this.onClickForward}>Forward</button>
                <button onClick={this.onClickBack}>Back</button>

            <p>Post your own images!</p>
            
            <input type='text' value={this.state.newImage} onChange={this.newImageFunction}/>
            <button onClick={this.AddImage}>Add</button>
            </div>

            
        )
    }
}
export default ImageSlide;