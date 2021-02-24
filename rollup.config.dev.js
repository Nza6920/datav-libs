const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/niu.datav.js')
const outputEsPath = path.resolve(__dirname, './dist/niu.datav.es.js')

module.exports = {
    input: inputPath,
    output: [{
        file: outputUmdPath,
        format: 'umd',
        name: 'datav',
        globals: {
            vue: 'vue'
        }
    }, {
        file: outputEsPath,
        format: 'es',
        globals: {
            vue: 'vue'
        }
    }],
    plugins: [
        // 支持 vue 语法
        vue(),
        // 支持 es6 语法
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            plugins: [
                ['@babel/transform-runtime', {
                    regenerator: true
                }]
            ]
        }),
        // 负责将外部引用模块一起打包
        resolve(),
        // 支持 commonjs 语法
        commonjs(),
        // 支持json
        json(),
        // 支持 scss 语法
        postcss({
            plugins: []
        })
    ],
    // 需要作为外部模块进行手动引入
    external: ['vue']
}
