import React from 'react';
import axios from 'axios';
import { Champion } from './Champion';

export class FreeChampionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            freeNames: []
        };
    };

    componentDidMount() {
        axios.get('/api').then((res)=>{
            this.setState({
                freeNames: res.data.freeNames
            });
            console.log(this.state.freeNames);
        });
    } 

    render () {
        return (
            <div className="column">  
              <h2 className="freeHeader">
                  Free Rotation
              </h2>
              <ul className="freeList">
                  {this.state.freeNames.map(freeName => 
                      <Champion freeName={freeName} />
                  )}
              </ul>
            </div>
          );
    }
  }