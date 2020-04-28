import React, {Component} from 'react';

export default class Animals extends Component {
    render() {
        return <li>
            <div className="info-container">
                <h2>{this.props.animal.title}</h2>
                <p className="animal-descrip">{this.props.animal.description}</p>
            </div>

            <div className="image-container">
                <img 
                alt={this.props.animal.url}
                src={this.props.animal.url} />
                
            </div>

            <p className="animal-horns">{this.props.animal.horns}</p>
            <p className="animal-keyword">{this.props.animal.keyword}</p>
        </li>
    }
}