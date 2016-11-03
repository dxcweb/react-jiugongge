/**
 * Created by dxc on 2016/11/3.
 */
import React, {Component, PropTypes} from 'react';
import {Block} from 'react-speed'
export default class Jiugongge extends Component {
    static defaultProps = {
        column: 5,
        border: null,
        height: null
    };
    state = {
        init: false
    };
    id = 'jiugongge' + Math.floor(Math.random() * 100000);
    //渲染完成后调用一次
    componentDidMount() {
        const me = this;
        this.initWidth();
        window[this.id] = ()=> {
            me.initWidth();
        };
        window.addEventListener("resize", window[this.id]);
    }

    initWidth() {
        const {column, border}=this.props;
        const dom = document.getElementById(this.id);
        const width = dom.clientWidth;
        let borderWidth = 0;
        if (border != null) {
            borderWidth = parseInt(border.split(" ")[0]) * (column - 1)
        }
        let itemWidth = (width - borderWidth) / column;
        this.setState({itemWidth, init: true});
    }

    //组件移除前调用。
    componentWillUnmount() {
        window.removeEventListener("resize",  window[this.id]);
        delete  window[this.id];
    }

    children() {
        const {init, itemWidth}=this.state;
        if (!init) {
            return null;
        }
        const {children, column, border, height}=this.props;
        if (children == null) {
            return null;
        }
        if (children instanceof Array) {
            let len = children.length;
            let lastLine = len % column;
            if (lastLine == 0) {
                lastLine = column;
            }
            return children.map((o, i)=> {
                let style = {...o.props.style, width: itemWidth};
                if (border != null) {
                    if (len - i > lastLine) {
                        style = {...style, borderBottom: border};
                    }
                    if ((i + 1) % column != 0) {
                        style = {...style, borderRight: border};
                    }
                }
                if (height != null) {
                    if (height == 'width') {
                        style = {...style, height: itemWidth};
                    } else {
                        style = {...style, height};
                    }
                }
                return React.cloneElement(o, {style, key: i})
            });
        } else {
            const style = {...children.props.style, width: itemWidth};
            return React.cloneElement(children, {style})
        }

    }

    render() {
        const {border, column, style, children, ...other}=this.props;
        const newStyle = {...style, border};
        return (
            <Block {...other} style={newStyle} id={this.id} wf>
                {this.children()}
            </Block>
        )
    }
}