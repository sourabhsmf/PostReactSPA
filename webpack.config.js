module.exports = {
    entry : "./src/index.js",
    output : {
        path : "C:\\Users\\Sourabh\\Documents\\devs\\learn_react\\dist\\assets\\",
        filename : "bundle.js",
        sourceMapFilename : "bundle.map"
    },
    mode : "development",
    devtool : "#source-map",
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /(node-modules)/,
                loader : "babel-loader",
                query: {
                    presets: ["@babel/preset-env" , "@babel/preset-react"],
                    plugins: [
                        [
                          "@babel/plugin-proposal-class-properties"
                        ]
                    ]
                }
            }
        ]
    }
}