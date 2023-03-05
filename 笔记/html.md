[toc]
# 标签
## 表格标签
`table`用来定义表格的标签
`th` 用来定义表格中的表头，表头单元格里面的内容加粗居中显示
```
<table>
<tr><th></th></tr>
<tr><td></td></tr>
</table>
```
### 表格属性
表格标签的属性实际开发并不常用，因为基本都是通过后面的CSS来设置的
align	规定表格相对周围元素的对齐方式
border	规定表格单元是否拥有边框，默认为" "，表示没有边框
cellpadding     规定单元边沿与其内容之间的空白，默认1像素
cellspacing	规定单元格之间的空白，默认2像素
width	规定表格的宽度
### 表格结构标签
- 用`<thead></thead>`标签表示表格的头部区域，`<thead>`内部必须拥有`<tr>`标签，一般是位于第一行
- 用`<tbody></tbody>`标签表示表格的主体区域，主要是用于放数据本体
```
<table>
<thead><tr></tr></thead> 
<tbody><tr></tr></tbody
</table>
```
### 合并单元格
- 跨行合并：`rowspan`=“合并单元格的个数”
- 跨列合并：`colspan`="合并单元格的个数"
```
<td rowspan="2"></td>
```
## 列表标签
|`<ul></ul>`|无序列表|里面只能包含li，没有顺序。li里面可以包含任何标签|
|:---:| :--: |:-----|
|`<ol></ol>`|有序列表 |里面只能包含li，有顺序|
|`<dl></dl>`|自定义列表 | 里面只能包含dt和dd，dt和dd里面可以放任何标签 |
```
     <dl>
        <dt>1</dt>
        <dd>1</dd>
        <dd>2</dd>
     </dl>
```
## 表单标签
### 表单域
表单域是一个包含表单元素的区域
<form></from>标签用于定义表单域，会把它范围内的表单元素信息提交给服务器
`method`:用于设置表单数据的提交方式，其取值为get或post
```
<form action="url地址" method="提交方式"name="表单域的名称"></from>
```

### 表单元素
**input**输入表单元素
input是个单标签，type 属性设置不同的属性用来指定不同的控件类型(文本字段、复选框、单选按钮、按钮等)

**单选框和复选框**
- type 属性设置为 radio 是单选框
- type 属性设置为 checkbox 是复选框
- 在`<input>`中定义`checked="checked"`时，当前项即为默认选中项
**name和value属性**
- name属性：当前input表单的名字，后台可以通过这个name属性找到这个表单，name的主要作用就是用于区别不同的表单
- 单选框和复选框name必须一致，value可以不一样
- 注意：value中的文字可以显示
**label标签**
- label标签用于绑定一个表单元素，当点击<label>标签内的文本时，浏览器就会自动将焦点(光标)转到表单元素上，用来增加用户体验
- label标签的 for属性 应当与相关元素的id 属性相同
```
<label for="sex">男</label><input type="radio"name="sex"id="sex"/>
```
**select**下拉表单元素
- `<select>`中至少包含一对`<option>`
在`<option>`中定义 `selected="selected"` 时，当前项即为默认选中项
```
<select>
        <option selected="selected">选项1</option>
        <option>选项2</option>
</select>
```
**textarea文本域元素**
- 用于定义多行文本输入的控件
- cols = “每行中的字符数” ， rows = “显示的行数”，我们在实际开发中不会使用，都是用CSS来改变大小
```
<textarea></textarea>
```
**submit和reset**
- type 属性设置为button：是一个按钮
- type 属性设置为file：是一个文件域，可以上传文件