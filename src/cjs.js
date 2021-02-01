// common js 语法
// 逐步导出 触发 tree shaking
exports.a = 1
exports.b = 2

// 不推荐这种写法 无法触发 tree shaking
// module.exports = {a,b}

