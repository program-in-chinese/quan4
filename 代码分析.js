const antlr4 = require("antlr4/index")
const 圈4Lexer = require("./圈4Lexer.js")
const 圈4Parser = require("./圈4Parser.js")
const 定制监听器 = require("./定制监听器.js").定制监听器

运行();

// TODO: 需改进-现为全局, 由于browserify
function 运行() {
  var 代码 = document.getElementById('输入代码').value;
  var chars = new antlr4.InputStream(代码)
  var lexer = new 圈4Lexer.圈4Lexer(chars)
  var tokens  = new antlr4.CommonTokenStream(lexer)
  var parser = new 圈4Parser.圈4Parser(tokens)
  parser.buildParseTrees = true
  var tree = parser.程序()

  var extractor = new 定制监听器()
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(extractor, tree)
}

window.运行 = 运行;