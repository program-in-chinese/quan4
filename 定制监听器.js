var antlr4 = require('antlr4/index');
const 圈4Listener = require('./圈4Listener.js').圈4Listener

JSListener = function () {
	圈4Listener.call(this);
	return this;
}

JSListener.prototype = Object.create(圈4Listener.prototype);
JSListener.prototype.constructor = JSListener;

JSListener.prototype.enter程序 = function(ctx) {

};

JSListener.prototype.exit程序 = function(ctx) {

};

JSListener.prototype.enter求约数 = function(ctx) {
};

JSListener.prototype.exit求约数 = function(ctx) {
    var t1 = ctx.getChild(0).getText()
    var t2 = ctx.getChild(1).getText()
    document.getElementById("spanId").innerHTML = t1 + ": " + t2;

};

exports.JSListener = JSListener;