const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputPathUmd = path.resolve(__dirname, './dist/my.datav.umd.js')
const outputPathEs = path.resolve(__dirname, './dist/my.datav.es.js')

console.log(inputPath)

module.exports = {
    input: inputPath,
    output: [
        {
            file: outputPathUmd,
            format: 'umd',
            name: 'datav-umd'
        },
        {
            file: outputPathEs,
            format: 'es',
            name: 'datav-es'
        }
    ],
    plugins: [
        // 负责将外部引用模块一起打包
        resolve(),
        // 支持 commonjs 语法
        commonjs()
    ],
    external: [
        // 需要作为外部模块进行手动引入
        'vue'
    ]
}
