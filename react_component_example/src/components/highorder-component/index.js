import React, { Component } from 'react';
import { connect } from 'react-redux';

import DisplayComponent from '../display-component';

import { loadInfo } from '../../data/ComponentExample/action';

import Report from './report';


class HighorderTopRoom extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        // 数据上报
        new Report(this, 'HighorderTopRoom').init();

        // 注意如果已经加载了数据，则不再重复请求
        if (!this.props.isLoaded) {
            this.props.loadInfo();
        }
    }

    /**
     * 点击操作
     */
    handleClick = (data) => {
        if (process.env.NODE_ENV !== 'production') {
            console.log('[HighorderTopRoom] handleEnterRoom(data)', data);
        }

        
    };

    render() {
        let { isLoaded, data } = this.props;

        return (
            <DisplayComponent isLoaded={isLoaded} data={data} callback={this.handleClick} />
        );
    }
}

function mapStateToProps(state) {
    let { info } = state;

    return {
        isLoaded: info.isLoaded,
        data: info.data
    };
    // return state;
}

function mapDispatchToProps(dispatch) {
    return {
        loadInfo() {
            return dispatch(loadInfo());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HighorderTopRoom);
