const path = require(`path`);

module.exports = {
    mode: `production`,
    entry: `./.ts/glm.js`,
    output: {
        path: path.join(__dirname, `dist`),
        filename: `glm.js`,
        library: {
            type: `commonjs`,
        }
    },
    optimization: {
        minimize: false,
    },
}
