import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './store';

import List from './components/List';
import PureComponent from './components/PureComponent';
import StatelessComponent from './components/StatelessComponent';
import HOC from './components/HOC';
import Example from './components/Example';


class Page extends React.Component {
    constructor (props, context) {
        super(props, context);

        this.state = {
           pureList: [1, 2, 3]
        };

        this.pureList = [1, 2, 3];
    }

    componentDidMount() {
        setTimeout(() => {
            // this.pureList[1] = 4
            // this.pureList = Object.assign({}, new , old)
            this.setState({
                pureList: [1, 4, 2]
            })
        }, 1000)
        console.log(this.hoc)
        // console.log(this.hoc.getWarpIns())
    }

    componentWillReceiveProps(nextProps) {
        const { props, state } = this;
        
    }

    render() {
        const { state } = this;
        const HighOrderInput = HOC(Example)
        return (
            <div>
                <h1>Hello React!</h1>
                <List />
                {state.pureList.map((item) => {
                    return <PureComponent data={item} />
                })}
                <StatelessComponent name="StatelessComponent" />
                <HighOrderInput ref={(ele) => {
                    this.hoc= ele
                }}/>
            </div>
        )
    }
}

const Root = connect((state) => {
    return state;
})(Page);



ReactDOM.render((
    <Provider store={store}>
        <Root />
    </Provider>
), document.getElementById('container'));