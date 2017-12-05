import React, { Component } from 'react';
import ArtistItem from "./ArtistItem";
import VirtualizedSelect from 'react-virtualized-select'
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

class Artist extends Component {

    constructor (props){
        super(props);

        this.state = {
            artists: []
        }

    }

    componentDidMount(){
      fetch('http://laravel.dev/api/artist')
          .then(res => res.json())
          .then((response) => {
            console.log(response.data)
            this.setState({
              artists: response.data
            })
          })
    }

    render() {
        return (
          <div className='container'>
            <div className='col-md-6 float-left'>
                <h3>Listagem</h3>
                <VirtualizedSelect
                options={this.state.artists.name}
                onChange={(selectValue) => this.setState({ selectValue })}
                value={this.state.selectValue}
                valueKey={this.state.artists.name}/>
                {this.state.artists.map((artist, i) =>
                  <ArtistItem path={'${match.parent}/:artistId'} key={artist.id} id={artist.id} name={artist.name}/>
                )}
            </div>
          </div>
        );
    }
}

export default Artist;
