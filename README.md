# react-jiugongge
react版本的九宫格
## install

```
npm install react-jiugongge --save
```
## Development

```
npm install
npm start
```
## Example
[http://github.dxcweb.com/react-jiugongge/](http://github.dxcweb.com/react-jiugongge/ "http://github.dxcweb.com/react-jiugongge/")

## Usage
    import Jiugongge, {JiugonggeItem} from 'react-jiugongge';
    ...
     <Jiugongge border="1px solid red"  column={3} height='width'>
            <JiugonggeItem>1</JiugonggeItem>
            <JiugonggeItem>2</JiugonggeItem>
            <JiugonggeItem>3</JiugonggeItem>
            <JiugonggeItem>4</JiugonggeItem>
            <JiugonggeItem>5</JiugonggeItem>
            <JiugonggeItem>6</JiugonggeItem>
            <JiugonggeItem>7</JiugonggeItem>
            <JiugonggeItem>8</JiugonggeItem>
     </Jiugongge>
## API
<table class="table table-bordered table-striped">
 <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
<tbody>
    <tr>
      <td>border</td>
      <td>String</td>
      <td>null</td>
      <td></td>
    </tr>
	<tr>
      <td>column</td>
      <td>Int</td>
      <td>5</td>
      <td></td>
    </tr>
	<tr>
      <td>height</td>
      <td>Any</td>
      <td>null</td>
      <td>height='100px' 或者 height='width' 高等于宽</td>
    </tr>
	<tr>
      <td>horizontalSpacing</td>
      <td>String</td>
      <td>null</td>
      <td>水平间距</td>
    </tr>
	<tr>
      <td>verticalSpacing</td>
      <td>String</td>
      <td>null</td>
      <td>垂直间距</td>
    </tr>
</tbody>
</table>
