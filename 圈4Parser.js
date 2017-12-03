// Generated from 圈4.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var 圈4Listener = require('./圈4Listener').圈4Listener;
var grammarFileName = "圈4.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0005\f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0002\u0002\u0004",
    "\u0002\u0004\u0002\u0002\u0002\t\u0002\u0006\u0003\u0002\u0002\u0002",
    "\u0004\b\u0003\u0002\u0002\u0002\u0006\u0007\u0005\u0004\u0003\u0002",
    "\u0007\u0003\u0003\u0002\u0002\u0002\b\t\u0007\u0003\u0002\u0002\t\n",
    "\u0007\u0004\u0002\u0002\n\u0005\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'\u6C42\u7EA6\u6570'" ];

var symbolicNames = [ null, null, "T\u0001", "T\u0001\u0002" ];

var ruleNames =  [ "程序", "求约数" ];

function 圈4Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

圈4Parser.prototype = Object.create(antlr4.Parser.prototype);
圈4Parser.prototype.constructor = 圈4Parser;

Object.defineProperty(圈4Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

圈4Parser.EOF = antlr4.Token.EOF;
圈4Parser.T__0 = 1;
圈4Parser.T数 = 2;
圈4Parser.T空白 = 3;

圈4Parser.RULE_程序 = 0;
圈4Parser.RULE_求约数 = 1;

function 程序Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = 圈4Parser.RULE_程序;
    return this;
}

程序Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
程序Context.prototype.constructor = 程序Context;

程序Context.prototype.求约数 = function() {
    return this.getTypedRuleContext(求约数Context,0);
};

程序Context.prototype.enterRule = function(listener) {
    if(listener instanceof 圈4Listener ) {
        listener.enter程序(this);
	}
};

程序Context.prototype.exitRule = function(listener) {
    if(listener instanceof 圈4Listener ) {
        listener.exit程序(this);
	}
};




圈4Parser.程序Context = 程序Context;

圈4Parser.prototype.程序 = function() {

    var localctx = new 程序Context(this, this._ctx, this.state);
    this.enterRule(localctx, 0, 圈4Parser.RULE_程序);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.求约数();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function 求约数Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = 圈4Parser.RULE_求约数;
    return this;
}

求约数Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
求约数Context.prototype.constructor = 求约数Context;

求约数Context.prototype.T数 = function() {
    return this.getToken(圈4Parser.T数, 0);
};

求约数Context.prototype.enterRule = function(listener) {
    if(listener instanceof 圈4Listener ) {
        listener.enter求约数(this);
	}
};

求约数Context.prototype.exitRule = function(listener) {
    if(listener instanceof 圈4Listener ) {
        listener.exit求约数(this);
	}
};




圈4Parser.求约数Context = 求约数Context;

圈4Parser.prototype.求约数 = function() {

    var localctx = new 求约数Context(this, this._ctx, this.state);
    this.enterRule(localctx, 2, 圈4Parser.RULE_求约数);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 6;
        this.match(圈4Parser.T__0);
        this.state = 7;
        this.match(圈4Parser.T数);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.圈4Parser = 圈4Parser;
