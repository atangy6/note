[toc]
# 新增语义化标签
div 对于搜索引擎来说，是没有语义的。
新增语义化标签如下：
< header > :头部标签
< nav >: 导航标签
< article >： 内容标签
< section >:定义文档某个区域
< aside >:侧边栏标签
< footer >: 尾部标签 ......
# 新增多媒体标签
## video视频
|属性|值|	描述|
|--|--|--|
|autoplay|	autoplay|	视频就绪自动播放(**谷歌浏览器需要添加muted**|来解决自动播放问题)
|controls|	controls|	向用户显示播放控件|
|width	|pixels(像素)	|设置播放器宽度|
|height|	pixels(像素)|	设置播放器高度|
|loop|	loop|	播放完是否继续播放该视频,循环播放|
|preload|	auto(预先加载视频)none(不应加载视频)|	规定是否预加载视频|(如果有了autoplay 就忽略该属性)|
|src|url	|视频url的地址|
|poster|lmgurl|	加载等待的画面图片(添加指定图片)|
|muted|	muted|	静音播放|
```html
<video >
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">/*考虑兼容性*/
您的浏览器不支持Video标签。
</video>
```
## audio音频
```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
您的浏览器不支持 audio 元素。
</audio>
```
|属性|	值|	描述|
|--|--|--|
|autoplay|	autoplay|	如果出现该属性，则音频在就绪后马上播放|
|controls|	controls|	如果出现该属性，则向用户显示控件，比如播放按钮|
|loop|	loop|	如果出现该属性，则每当音频结束时重新开始播放|
|src|	url|	要播放的音频的url|
- 谷歌浏览器把音频和视频自动播放禁止了
- 我们可以给视频标签添加`muted`属性来静音播放`视频`，音频不可以(可以通过JavaScript解决)
# 新增input类型
|属性值|	说明|
|--|--|--|
|type=“email”|	限制用户输入必须为Email类型|
|type=“url”	限制用户输入必须为URL类型|
|type=“data”|限制用户输入必须为日期类型|
|type=“time”|限制用户输入必须为时间类型|
|type=“month”|限制用户输入必须为月类型|
|type=“week”|限制用户输入必须为周类型|
|type="number"|限制用户输入必须为数字类型|
|type="tel"	|手机号码|
|type="search"|	搜索框|
|type=“color”	|生成一个颜色选择表单|
>表单一定要写`<form></from>`,表格一定要写`<table></table>` 
# 新增表单属性
|属性	|值	|说明|
|--|--|--|
|required	|required|必须在提交之前填写输入域（不能为空）|
|placeholder	|提示文本|	表单的提示信息，存在默认值将不显示|
|autofocus	|autofocus	|自动聚焦属性，页面加载完成自动聚焦到指定表单|
|autocomplete	|off/on|当用户在自动完成域中开始输入时，浏览器应该在该域中显示之前填写的选项。|
|multiple|	multiple|可以选择多个文件|
# 未完。。。
