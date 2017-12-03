// Generated from 圈4.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0005\u0019\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0006\u0003\u000f\n\u0003\r\u0003\u000e\u0003\u0010\u0003\u0004",
    "\u0006\u0004\u0014\n\u0004\r\u0004\u000e\u0004\u0015\u0003\u0004\u0003",
    "\u0004\u0002\u0002\u0005\u0003\u0003\u0005\u0004\u0007\u0005\u0003\u0002",
    "\u0004\u0003\u00022;\u0004\u0002\u000b\f\"\"\u0002\u001a\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0003\t\u0003\u0002\u0002\u0002\u0005\u000e",
    "\u0003\u0002\u0002\u0002\u0007\u0013\u0003\u0002\u0002\u0002\t\n\u0007",
    "\u6c44\u0002\u0002\n\u000b\u0007\u7ea8\u0002\u0002\u000b\f\u0007\u6572",
    "\u0002\u0002\f\u0004\u0003\u0002\u0002\u0002\r\u000f\t\u0002\u0002\u0002",
    "\u000e\r\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002",
    "\u0010\u000e\u0003\u0002\u0002\u0002\u0010\u0011\u0003\u0002\u0002\u0002",
    "\u0011\u0006\u0003\u0002\u0002\u0002\u0012\u0014\t\u0003\u0002\u0002",
    "\u0013\u0012\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002",
    "\u0015\u0013\u0003\u0002\u0002\u0002\u0015\u0016\u0003\u0002\u0002\u0002",
    "\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0018\b\u0004\u0002\u0002",
    "\u0018\b\u0003\u0002\u0002\u0002\u0005\u0002\u0010\u0015\u0003\b\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function 圈4Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

圈4Lexer.prototype = Object.create(antlr4.Lexer.prototype);
圈4Lexer.prototype.constructor = 圈4Lexer;

圈4Lexer.EOF = antlr4.Token.EOF;
圈4Lexer.T__0 = 1;
圈4Lexer.T数 = 2;
圈4Lexer.T空白 = 3;

圈4Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

圈4Lexer.prototype.modeNames = [ "DEFAULT_MODE" ];

圈4Lexer.prototype.literalNames = [ null, "'\u6C42\u7EA6\u6570'" ];

圈4Lexer.prototype.symbolicNames = [ null, null, "T\u0001", "T\u0001\u0002" ];

圈4Lexer.prototype.ruleNames = [ "T__0", "T数", "T空白" ];

圈4Lexer.prototype.grammarFileName = "圈4.g4";



exports.圈4Lexer = 圈4Lexer;

