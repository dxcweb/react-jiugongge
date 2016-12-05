/**
 * Created by dxc on 2016/11/3.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Jiugongge, {JiugonggeItem} from 'react-jiugongge';
class Simple extends Component {
    render() {
        return (
            <div style={{margin:"0 auto"}}>
                <Jiugongge border="2px solid red"  column={3} height='width'>
                    <JiugonggeItem>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </JiugonggeItem>
                    <JiugonggeItem>1</JiugonggeItem>
                    <JiugonggeItem>2</JiugonggeItem>
                    <JiugonggeItem>3</JiugonggeItem>
                    <JiugonggeItem>4</JiugonggeItem>
                    <JiugonggeItem>5</JiugonggeItem>
                    <JiugonggeItem>6</JiugonggeItem>
                    <JiugonggeItem>7</JiugonggeItem>
                    <JiugonggeItem>8</JiugonggeItem>
                </Jiugongge>
            </div>
        )
    }
}
ReactDOM.render(
    <Simple />,
    document.getElementById('__react-content')
);