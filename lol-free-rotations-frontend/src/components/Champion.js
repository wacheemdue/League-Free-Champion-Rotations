import React from 'react';

export class Champion extends React.Component {
    constructor(props) {
        super(props);
    };

    render () {
        return (
            <>  
              <h3>
                  {this.props.freeName}
              </h3>
            </>
          );
    }
}