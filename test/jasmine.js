const config = require('../../../test/jasmine')

module.exports = {
    ...config,
    spec_files: [
        "test/src/**/*.ts",
        "test/src/**/*.js",
        "test/src/**/*.tsx",
        "test/src/**/*.jsx",
        'src/stepwise/test/src/**/*.ts',
        'src/stepwise/test/src/**/*.js',
        'src/stepwise/test/src/**/*.tsx',
        'src/stepwise/test/src/**/*.jsx',
    ],
}
