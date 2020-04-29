import React, {Component} from 'react';
import images from './data.js';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    state = {selected: null};
  
    handleChange = (event) => {
      this.setState({ selected: event.target.value });
    };
  
    render() {
      return (
        <div>
          <main>
            <section className="options">
              <select className="animal-type-filter" onChange={this.handleChange}>
                <option value="" defaultValue>
                  All Images
                </option>
                <option value="narwhal">Narwhal</option>
                <option value="rhino">Rhino</option>
                <option value="unicorn">Unicorn</option>
                <option value="unilego">UniLego</option>
                <option value="triceratops">Triceratops</option>
                <option value="markhor">Markhor</option>
                <option value="mouflon">Mouflon</option>
                <option value="addax">Addax</option>
                <option value="chameleon">Chameleon</option>
                <option value="lizard">Lizard</option>
                <option value="dragon">Dragon</option>
              </select>
            </section>
  
            <section className="list-section"></section>
            <ul className="animals">
              {
                images
                  .filter(animalImages => {
                    if (!this.state.selected) return true;
                    return animalImages.keyword === this.state.selected;
                  })
  
                  .map(weirdPic => {
                    console.log(weirdPic)
                    return <ImageItem animal={weirdPic} />
                  })
              }
            </ul>
          </main>
  
          
        </div>
      )
    }
  }
  