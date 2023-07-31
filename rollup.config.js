const terser = require('@rollup/plugin-terser')
const babel = require('@rollup/plugin-babel')
const resolve = require('@rollup/plugin-node-resolve')
const rollup = require('rollup')

// let format = 'es'
process.argv.forEach(item => {
    let regx = /(-f=)/g
    if (regx.test(item)) {
        let patt = item.split('=')
        format = patt[1]
    }
})
const inputOptions = Object.assign({
    input: './index.js'
}, {
    plugins: [
        resolve(),
        babel({ babelHelpers: 'bundled' })
    ]
})
let format = ['es', 'es:min', 'umd', 'umd:min']
let outputConfig = {
    'es': {
        file: 'dist/paper-pen.esm.js',
        format: 'es'
    },
    'es:min': {
        file: 'dist/paper-pen.esm.min.js',
        format: 'es',
        plugins: [terser()]
    },
    'umd': {
        file: 'dist/paper-pen.umd.js',
        format: 'umd',
        name: 'PaperPen'
    },
    'umd:min': {
        file: 'dist/paper-pen.umd.min.js',
        format: 'umd',
        plugins: [terser()],
        name: 'PaperPen'
    }
}

// console.log(outputOptions)

async function build() {
    const bundle = await rollup.rollup(inputOptions)
    format.forEach(async item => {
        const { output } = await bundle.generate(outputConfig[item])
        await bundle.write(outputConfig[item])
    })
}

build()