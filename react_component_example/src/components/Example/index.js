import React from 'react';

export default class Example extends React.Component {
    render() {
        return <input name='name' {...this.props.name} />
    }
}