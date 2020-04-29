import React, {Component} from 'react';

export default class ImageItem extends Component {
    render() {
        return <li className="list-item">
            <div className="info-container">
                <h2 className="title">{this.props.animal.title}</h2>
                <p className="animal-descrip">{this.props.animal.description}</p>
            </div>

            <div className="image-container">
                <img className="just-image"
                alt={this.props.animal.url}
                src={this.props.animal.url} />
                
            </div>

            <p className="animal-horns">Horns: {this.props.animal.horns}</p>
            <p className="animal-keyword">Category: {this.props.animal.keyword}</p>
        </li>
    }
}