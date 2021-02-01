(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['datav-umd'] = factory());
}(this, (function () { 'use strict';

	// common js 语法
	var a = 1;

	// import {random} from "./plugin";

	console.log(a);

	return a;

})));
