import React, { Component } from 'react';

import './index.scss';

export default class DisplayTopRoom extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleClick = () => {
        let { callback, data } = this.props;

        if (typeof callback === 'function') {
            callback(data);
        }
    };

    render() {
        let { isLoaded, data } = this.props;

        if (!isLoaded) {
            return null;
        }

        let { picture, name, address } = data;

        return (
            <div className="display-component" onClick={this.handleClick}>
                <div className="pic" style={{ backgroundImage: `url("${picture}")` }} />

                <div className="info">
                    <p>名字：{name}</p>
                    <p>地址{address}</p>
                </div>
            </div>
        );
    }
}

