import React from 'react';

class HelloClass extends React.Component {
    static defaultProps = {
        name: '이름없음'
    };
    render() {
        const { color, name, isSpecial } = this.props;
        return (
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }
}

export default HelloClass;