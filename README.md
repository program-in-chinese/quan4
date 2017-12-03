参考: [ANTLR4: Making a compiler with the JavaScript runtime](http://www.scriptol.com/programming/antlr4-javascript.php)

添加了网页界面.

```
$ java -cp "antlr-4.7-complete.jar:$CLASSPATH" org.antlr.v4.Tool -Dlanguage=JavaScript 圈4.g4
```

安装browserify后:
```
$ browserify 代码分析.js > 圈4.js
```