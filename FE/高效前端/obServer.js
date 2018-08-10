/**
 * 观察者模式
 */


/**
 * 观察者队列
 */
function ObserveList() {
    this.ObserveList = [];
}
ObserveList.prototype.Add = function (item) {
    this.ObserveList.push(item)
}
ObserveList.prototype.Empty = function () {
    this.ObserveList = [];
}
ObserveList.prototype.Count = function () {
    return this.ObserveList.length
}
ObserveList.prototype.GET = function (index) {
    if (index > -1 && index < this.ObserveList.length) {
        return this.ObserveList[index]
    }
}
ObserveList.prototype.Insert = function (item, index) {
    var pointer = -1;
    if (index == 0) {
        this.ObserveList.unshift(item)
        pointer = index
    } else if (index === this.ObserveList.length) {
        this.ObserveList.push(item)
        pointer = index
    }
    return pointer
}
Object.prototype.IndexOf() = function (item, startIndex) {
    return this.ObserveList.indexOf(item);
}
Object.prototype.removeAt = function (index) {
    if (index == 0) {
        this.ObserveList.shift();
    } else if (index == this.ObserveList.length - 1) {
        this.ObserveList.pop()
    }
}
function Extend(extendsion, obj) {
    for (var i in extendsion) {
        obj[i] = extendsion[i];
    }
}

//被观察者
function Subject() {
    this.observers = new ObserveList();
}
Subject.prototype.AddObserver = function (observer) {
    this.observers.Add(observer)
}
Subject.prototype.removeObserve = function (observer) {
    this.observers.removeAt(this.observers.IndexOf(observer))
}

Subject.prototype.Notify = function (context) {
    var ObserverCount = this.observers.Count();
    for (var i = 0; i < ObserverCount; i++) {
        this.observers.GET(i).Update(context)
    }
}
//观察者具体定义
function Observer() {
    this.Update = function () {
        // ...
    };
}