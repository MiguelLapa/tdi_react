import React, { Component } from 'react';
import ListItem from "./ListItem";
import VirtualizedSelect from 'react-virtualized-select'

class List extends Component {

    constructor (props){
        super(props);

        this.state = {
            tracks: []
        }

    }

    componentDidMount(){
      fetch('http://laravel.dev/api/track')
          .then(res2 => res2.json())
          .then((response2) => {
            console.log(response2.data)
            this.setState({
              tracks: response2.data
            })
          })
    }

    newItem = () =>{
        const item = {
            key: 'title ',
            name: 'more stuff...',
            year: '2001'
        };
        const data = this.state.items;
        data.push(item);

        this.setState({items: data});
    };

    removeItem = (index) => {
      const data = this.state.items;
      data.splice(index, 1);

      this.setState({items: data});
    }

    render() {
        return (
          <div className='container'>
            <div className='col-md-6 float-left'>
                <h3>Listagem</h3>
                <VirtualizedSelect
                options={this.state.tracks.name}
                onChange={(selectValue) => this.setState({ selectValue })}
                value={this.state.selectValue}/>
                {this.state.tracks.map((item, i) =>
                 <ListItem onClick={this.removeItem.bind(item)} path={'http://laravel.dev/api/album/' + item.id} key={item.id} id={item.id} name={item.name} year={item.year}/>
                )}
            </div>
          </div>
        );
    }
}

export default List;
