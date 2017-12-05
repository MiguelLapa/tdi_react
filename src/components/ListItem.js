import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ListItem extends Component {

    constructor (props){
        super(props);

        this.setState = props;
    }



    render() {
        return (
          <div className='container float-left' style={{marginBottom: 7 + 'px'}}>
            <div className='card'>
              <div className='card-heading'>
                <a href={this.props.path}><span key={this.props.id} className="float-left"><span>{this.props.id}:</span> {this.props.name} - {this.props.year} --- </span></a>
                <button key={this.props.id + "btn"} className="float-right">Delete {this.props.id}</button>
              </div>
            </div>
          </div>


        );
    }
}

export default ListItem;
