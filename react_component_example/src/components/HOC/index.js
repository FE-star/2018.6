import React from 'react';

function ppHOC(WrappedComponent) {
    class PP extends React.Component {
        constructor(props) {
            super(props);
            
            this.state = {
                name: ''
            };

            this.onNameChange = this.onNameChange.bind(this);
        }

        onNameChange(event) {
            this.setState({
                name: event.target.value
            })
        }

        getWarpIns() {
            return this.wrappedIns // 被包裹组件的实例
        }

        render() {
            const { props, state } = this;
            const { forwardedRef } = props;
            const newProps = {
                name: {
                    value: state.name,
                    onChange: this.onNameChange
                }
            }

            // return <WrappedComponent {...this.props} {...newProps}  />
            return (
                <div style={{display: 'block'}}>
                    {/* <WrappedComponent {...this.props} {...newProps}
                        ref={(ele) => {
                            this.wrappedIns = ele;
                        }}  /> */}
                    <WrappedComponent {...this.props} {...newProps}
                        ref={forwardedRef}  
                    />
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <PP {...props} forwardedRef={ref} />;
    });
}

function iiHOC(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
        render() {
            if(this.props.flag) {
                return super.render()
            } else {
                return null
            }
            // 判断是否是开发环境，如果是的话，可以把logger组件一起渲染出来，很方便的进入debugger模式
        }
    }
}

export default ppHOC;