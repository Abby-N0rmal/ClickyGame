import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"
//image imports (since I'm not using a server)
import candycorn from "./images/candycorn.jpg"
import gumdrops from "./images/gumdrops.jpg"
import gummybears from "./images/gummybears.jpg"
import gummyworms from "./images/gummyworms.jpg"
import jellybeans from "./images/jellybeans.jpg"
import lolipops from "./images/lolipops.jpg"
import mandms from "./images/mandms.jpg"
import mikeandikes from "./images/mikeandikes.jpg"
import mints from "./images/mints.jpg"
import skittles from "./images/skittles.jpg"
import starbursts from "./images/starbursts.jpg"
import swedishfish from "./images/swedishfish.jpg"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Clicky Game'
  };

  // credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "candycorn":
        return `${candycorn}`
      case "gumdrops":
        return `${gumdrops}`
      case "gummybears":
        return `${gummybears}`
      case "gummyworms":
        return `${gummyworms}`
      case "jellybeans":
        return `${jellybeans}`
      case "lolipops":
        return `${lolipops}`
      case "mandms":
        return `${mandms}`
      case "mikeandikes":
        return `${mikeandikes}`
      case "mints":
        return `${mints}`
      case "skittles":
        return `${skittles}`
      case "starbursts":
        return `${starbursts}`
      case "swedishfish":
        return `${swedishfish}`
      default:
        return `${candycorn}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
