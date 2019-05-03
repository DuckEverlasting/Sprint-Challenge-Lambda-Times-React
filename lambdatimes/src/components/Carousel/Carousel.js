import React, { Component } from 'react';
import { carouselData } from '../../data'

class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      selectedImage: 0
    }
  }
  componentDidMount(){
    this.setState({
      images: carouselData,
    })
  }

  leftClick = () => {
    console.log("clack")
    if (this.state.selectedImage > 0) {
      this.setState({
        selectedImage: this.state.selectedImage - 1
      })
    } else {
      this.setState({
        selectedImage: (this.state.images.length - 1)
      })
    }
  }

  rightClick = () => {
    console.log("click")
    if (this.state.selectedImage < (this.state.images.length - 1)) {
      this.setState({
        selectedImage: this.state.selectedImage + 1
      })
    } else {
      this.setState({
        selectedImage: 0
      })
    }
  }

  selectedImage = () => {
    const url = this.state.images[this.state.selectedImage]
    return <img src={url} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}

export default Carousel