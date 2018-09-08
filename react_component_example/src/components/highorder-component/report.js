import aop from '../utils/aop';

export default class Report {
    constructor(component, tag) {
        this.component = component;
        this.tag = tag;
    }

    init() {
        // 推荐列表展示次数
        aop.after(this.component, 'handleOnReady', (isSuccess, data) => {
            //
            report(/**/)
        });

        // 点击进房统计
        aop.after(this.component, 'handleEnterRoom', (data) => {
            // 可以在这里拿到组件的props
            let { isLoaded } = this.component.props;

            
        });

    }
}
