/**
 * Created by dxc on 2016/11/4.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Jiugongge, {JiugonggeItem} from 'react-jiugongge';
class Spacing extends Component {
    render() {
        return (
            <div style={{margin:"0 auto",maxWidth:282.5}}>
                <Jiugongge border="2px solid red" horizontalSpacing="10px" verticalSpacing="10px" column={3}
                           height='width'
                           style={{padding:10}}
                >
                    <JiugonggeItem>1</JiugonggeItem>
                    <JiugonggeItem>2</JiugonggeItem>
                    <JiugonggeItem>3</JiugonggeItem>
                    <JiugonggeItem>4</JiugonggeItem>
                    <JiugonggeItem>5</JiugonggeItem>
                    <JiugonggeItem>6</JiugonggeItem>
                    <JiugonggeItem>7</JiugonggeItem>
                    <JiugonggeItem>8</JiugonggeItem>
                    <JiugonggeItem>9</JiugonggeItem>
                </Jiugongge>
            </div>
        )
    }
}
ReactDOM.render(
    <Spacing />,
    document.getElementById('__react-content')
);