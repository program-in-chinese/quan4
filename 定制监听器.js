var antlr4 = require('antlr4/index');
const 圈4Listener = require('./圈4Listener.js').圈4Listener

定制监听器 = function () {
	圈4Listener.call(this);
	return this;
}

定制监听器.prototype = Object.create(圈4Listener.prototype);
定制监听器.prototype.constructor = 定制监听器;
/*
无需接口定义: enter程序/exit程序/enter求约数
*/
定制监听器.prototype.exit求约数 = function(上下文) {
  var 原数 = parseInt(上下文.getChild(1).getText());
  document.getElementById("输出").innerHTML = 原数 + "的约数: " + 求约数(原数);
};

function 求约数(原数) {
  var 约数 = [];
  for (var i = 1; i < 原数 - 1; i++) {
    if (原数 % i == 0) {
      约数.push(i);
    }
  }
  return 约数;
}

exports.定制监听器 = 定制监听器;