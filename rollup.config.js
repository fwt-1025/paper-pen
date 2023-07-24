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
    input: './loom.js'
}, {
    plugins: [
        resolve(),
        babel({ babelHelpers: 'bundled' })
    ]
})
let format = ['es', 'es:min', 'umd', 'umd:min']
let outputConfig = {
    'es': {
        file: 'dist/loom.esm.js',
        format: 'es'
    },
    'es:min': {
        file: 'dist/loom.esm.min.js',
        format: 'es',
        plugins: [terser()]
    },
    'umd': {
        file: 'dist/loom.umd.js',
        format: 'umd',
        name: 'Loom'
    },
    'umd:min': {
        file: 'dist/loom.umd.min.js',
        format: 'umd',
        plugins: [terser()],
        name: 'Loom'
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