const path = require('path');

module.exports = {
    mode: "production",
    entry: "./.ts/glm.js",
    output: {
        path:path.resolve(__dirname, "dist"), // string (default)
        filename: "glm.js",
        library: {
            type: "commonjs",
        }
    },
    optimization: {
        minimize: false,
    },
}
