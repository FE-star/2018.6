import React from 'react';

export default class PureComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        const { props, state } = this;
        return (
            <div>{props.data}</div>
        );
    }
  }

