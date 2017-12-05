import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ArtistItem extends Component {

    constructor (props){
        super(props);

        this.setState = props;
    }

    render() {
        return (
          <div className='container float-left' style={{marginBottom: 7 + 'px'}}>
            <div className='card'>
              <div className='card-heading'>
                <a href={'/artist/' + this.props.id}><span key={this.props.id} className="float-left"><b>{this.props.id}:</b> {this.props.name}</span></a>
              </div>
            </div>
          </div>


        );
    }
}

export default ArtistItem;
