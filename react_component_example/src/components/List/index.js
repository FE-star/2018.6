import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //list: [{key: 1, value: 'first'}, {key: 2, value: 'second'}]
            list: [{key: 0, value: 'zero'}, {key: 1, value: 'first'}, {key: 2, value: 'second'}]
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                list: [{key: 0, value: 'c'}, {key: 1, value: 'b'}, {key: 2, value: 'a'}]
            })
        }, 2000);
    }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    render() {
        const { props, state } = this;
        return (
            <ul>
                {state.list.map((item) => {
                    return (<li key={item.key}>{item.value}</li>)
                })}
            </ul>
            // <div>
            //     <ul>
            //         <li key='1'>first</li>
            //         <li key='2'>second</li>
            //     </ul>

            //     <ul>
            //         <li key='0'>zero</li>
            //         <li key='1'>first</li>
            //         <li key='2'>second</li>
            //     </ul>

            //     <ul>
            //         <li key='0'>c</li>
            //         <li key='1'>b</li>
            //         <li key='2'>a</li>
            //     </ul>

            //     <ul>
            //         <li>first</li>
            //     </ul>

            //     <ul>
            //         <li>first</li>
            //         <li>second</li>
            //     </ul>

            //     <ul>
            //         <li>zero</li>
            //         <li>first</li>
            //         <li>second</li>
            //     </ul>
            // </div>
        );
    }
  }

