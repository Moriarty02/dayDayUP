const has = p => o => o.hasOwnProperty(p);
var has = function (p) {
    return function (o) {
        return o.hasOwnProperty(p);
    }
}

/**
 * 
 * 实现防抖函数的核心就是每次事件被触发的时候，
 * 我们不是立即去调用相应的handler，而是每一次都重新设置一个timeout,
 * 等待一段时间，然后再执行我们的handler.
 * @param {any} fn 
 */
function debance(fn,waitTime){
    let timer= undefined;
    return function(){
        let context=this;
        let args=arguments;
        clearTimeout(timer);
        timer=setTimeout(function(){
            fn.apply(context,args);
        },waitTime);
    }
}
/**
 * 函数节流的要点是，声明一个变量当标志位，记录当前代码是否在执行。
 如果空闲，则可以正常触发方法执行。
 如果代码正在执行，则取消这次方法执行，直接return
 处理最后一次没有被执行的bug
 */
function throttle(fn,intervalTime){
    let inInterval=false;
    let timer=undefined;
    let lastTimer=undefined;
    return function(){
        let context=this;
        let args=arguments;
        if(!inInterval){
            clearTimeout(lastTimer);
            fn.apply(context,args);
            inInterval=true;
            setTimeout(function(){
                inInterval=false;
            },intervalTime)
        }else{
            clearTimeout(lastTimer);
            lastTimer=setTimeout(function(){
                fn.apply(context,args);
                inInterval=false;
            },intervalTime)
        }
    }
}
/**
 * once  
 * once函数只被调用了一次 所以第二次被传入的函数执行的时候 ran已经被设置为true了
 */
function once(func){
    let ran,result;
    return function(){
        if(ran)return result;
        ran=true;
        result=func.apply(this,arguments)
        func=null;
        return result;
    }
}