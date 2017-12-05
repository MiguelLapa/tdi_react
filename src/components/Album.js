import React, { Component } from 'react';
import AlbumDetail from "./AlbumDetail";
import VirtualizedSelect from 'react-virtualized-select'

class Album extends Component {

    constructor (props){
        super(props);

        this.state = {
            albuns: []
        }

    }

    componentDidMount(){
      fetch('http://laravel.dev/api/album')
          .then(res2 => res2.json())
          .then((response2) => {
            console.log(response2.data)
            this.setState({
              albuns: response2.data
            })
          })
    }


    render() {
        return (
          <div className='container'>
            <div className='col-md-6 float-left'>
                <h3>Listagem</h3>
                <VirtualizedSelect
                options={this.state.albuns.name}
                onChange={(selectValue) => this.setState({ selectValue })}
                value={this.state.selectValue}/>
                {this.state.albuns.map((album, i) =>
                  <AlbumDetail path={'http://laravel.dev/api/album/' + album.id} key={album.id} id={album.id} name={album.name} year={album.year} size={album.size}/>
                )}
            </div>
          </div>
        );
    }
}

export default Album;
