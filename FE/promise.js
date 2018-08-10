function Promsie(fn){
    var callback;
    this.then=function(done){
        callback=done;
    }
    function resolve(){
        callback();
    }
    fn(resolve)
}
function Promsie(fn){
    var promise=this,
    value=null;
    promise._resolves=[];
    this.then=function(onFulfilled){
        promise._resolves.push(onFulfilled)
        return this;
    }
    function resolve(value){
        promise._resolves.forEach(callback => {
            callback(value)
        });
    }
    fn(resolve);
}
