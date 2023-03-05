function animate(obj,target,callback){
    // console.log(callback);  callback=function(){}    调用的时候callback()

    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        //步长值写到定时器里面
        // 把步长值改为整数不要出现小数
        // var step=Math.ceil((target-obj.offsetLeft) / 10);
        var step=(target-obj.offsetLeft) / 10;
        step=step>0?Math.ceil(step):Math.floor(step);
        if(obj.offsetLeft==target){
            // 停止动画
            clearInterval(obj.timer);//取消setInterval()建立的定时器
            // 回调函数写到定时器结束里面
            if(callback){
                // 调用函数
                callback();
            }
        }
    obj.style.left=obj.offsetLeft+step+'px';//返回当前元素相对于其 offsetParent 元素的左边距的距离。
},30);
}