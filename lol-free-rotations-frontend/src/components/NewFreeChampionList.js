import React from 'react';
import axios from 'axios';
import { Champion } from './Champion';

export class NewFreeChampionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newNames: []
        };
    };

    componentDidMount() {
        axios.get('/api').then((res)=>{
            this.setState({
                newNames: res.data.newNames
            });
        });
    } 

    render () {
        return (
            <div className="column">    
              <h2 className="newHeader">
                  Free Rotation for Noobs (Lv 10 and Lower)
              </h2>
              <ul className="newList">
                  {this.state.newNames.map(newName => 
                      <Champion freeName={newName} />
                  )}
              </ul>
            </div>
          );
    }
  }