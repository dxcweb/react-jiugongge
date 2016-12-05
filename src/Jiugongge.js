/**
 * Created by dxc on 2016/11/3.
 */
import React, {Component, PropTypes} from 'react';
import Block from 'fs-flex'
export default class Jiugongge extends Component {
    static defaultProps = {
        column: 5,
        border: null,
        height: null
    };
    state = {
        init: false,
        width: null
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
        const {column, border, horizontalSpacing}=this.props;
        const dom = document.getElementById(this.id);
        let width = dom.clientWidth;
        if (dom.style.paddingLeft != null && dom.style.paddingLeft != '') {
            width -= parseInt(dom.style.paddingLeft);
        }
        if (dom.style.paddingRight != null && dom.style.paddingRight != '') {
            width -= parseInt(dom.style.paddingRight);
        }
        if (this.state.width != width) {
            this.setState({width});
        }
        if (dom.style.paddingLeft != null && dom.style.paddingLeft != '') {
            if (border != null) {
                width -= parseInt(border.split(" ")[0]);//在减去左边框
            }
        }
        if (dom.style.paddingRight != null && dom.style.paddingRight != '') {
            if (border != null) {
                width -= parseInt(border.split(" ")[0]);//在减去左边框
            }
        }
        if (border != null) {
            width -= parseInt(border.split(" ")[0]) * (column - 1);
        }
        if (horizontalSpacing != null) {
            width -= parseInt(horizontalSpacing) * (column - 1);
            if (border != null) {
                width -= parseInt(border.split(" ")[0]) * (column - 1);//在减去左边框
            }
        }
        let itemWidth = width / column;
        this.setState({itemWidth, init: true});
    }

    //组件移除前调用。
    componentWillUnmount() {
        window.removeEventListener("resize", window[this.id]);
        delete  window[this.id];
    }

    children() {
        const {init, itemWidth}=this.state;
        if (!init) {
            return null;
        }
        const {children, column, border, height, horizontalSpacing, verticalSpacing}=this.props;
        if (children == null) {
            return null;
        }
        if (children instanceof Array) {
            let len = children.length;
            let lastLine = len % column;
            if (lastLine == 0) {
                lastLine = column;
            }
            const dom = document.getElementById(this.id);
            return children.map((o, i)=> {
                let style = {...o.props.style, width: itemWidth};
                if (horizontalSpacing != null) {
                    if ((i + 1) % column != 0) {
                        style = {...style, marginRight: horizontalSpacing};
                    }
                }
                if (verticalSpacing != null) {
                    if (len - i > lastLine) {
                        style = {...style, marginBottom: verticalSpacing};
                    }
                }
                if (border != null) {
                    if (len - i > lastLine) {
                        style = {...style, borderBottom: border};
                    }
                    if ((i + 1) % column != 0) {
                        style = {...style, borderRight: border};
                    }
                    if (horizontalSpacing != null) {
                        if ((i) % column != 0) {
                            style = {...style, borderLeft: border};
                        }
                    }
                    if (verticalSpacing != null) {
                        if (i >= column) {
                            style = {...style, borderTop: border};
                        }
                    }
                    if (dom.style.paddingLeft != null && dom.style.paddingLeft != '') {
                        if ((i) % column == 0) {
                            style = {...style, borderLeft: border};
                        }
                    }
                    if (dom.style.paddingRight != null && dom.style.paddingRight != '') {
                        if ((i + 1) % column == 0) {
                            style = {...style, borderRight: border};
                        }
                    }
                    if (dom.style.paddingTop != null && dom.style.paddingTop != '') {
                        if (i < column) {
                            style = {...style, borderTop: border};
                        }
                    }
                    if (dom.style.paddingBottom != null && dom.style.paddingBottom != '') {
                        if (len - i <= lastLine) {
                            style = {...style, borderBottom: border};
                        }
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
        const {column, horizontalSpacing, verticalSpacing, children, style, border, ...other}=this.props;
        const newStyle = {...style, border};
        return (
            <Block {...other} style={newStyle} id={this.id}>
                <Block style={{width:this.state.width}} wf>
                    {this.children()}
                </Block>
            </Block>
        )
    }
}