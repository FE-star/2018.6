import React from 'react';
import 'index.css'

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    attend() {
        
    }

    render() {
        const { props, state } = this;
        return (
            <div className="button" onClick={this.attend}>关注</div>
        );
    }
  }