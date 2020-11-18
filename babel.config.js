module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current"
                }
            }
        ],
        "@babel/preset-typescript"
    ],
    plugins: [
        [
            "module-resolver",
            {
                alias: {
                    "@config": "./scr/config",
                    "@models": "./scr/models",
                    "@controllers": "./scr/controllers",
                    "@views": "./scr/views"
                }
            }
        ]
    ],
    ignore: [
        "**/*.spec.ts"
    ]
}