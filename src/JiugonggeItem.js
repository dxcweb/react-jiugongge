/**
 * Created by dxc on 2016/11/3.
 */
import React, {Component, PropTypes} from 'react';
export default class JiugonggeItem extends Component {
    render() {
        const {children, ...other}=this.props;
        return (
            <div {...other}>{children}</div>
        )
    }
}