if (typeof Object.beget !== 'function') {
     Object.beget = function (o) {
         var F = function () {};
         F.prototype = o;
         return new F();
     };
}
if (typeof Function.prototype.method !== 'function') {
    Function.prototype.method = function (name, func) {
        this.prototype[name] = func;
        return this;
    };
}
