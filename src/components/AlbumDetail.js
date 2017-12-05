import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AlbumDetail extends Component {

    constructor (props){
        super(props);

        this.setState = props;
    }

    render() {
        return (
          <div className='container float-right'>
            <div className='card'>
              <div className='card-heading'>
                <span key={this.props.id}><span>{this.props.id}:</span> {this.props.name} - {this.props.year} - {this.props.size}</span>
              </div>
            </div>
          </div>
        );
    }
}

export default AlbumDetail;
