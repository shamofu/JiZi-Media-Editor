module.exports = api => {
  api.cache(true)
  return {
    presets: [
      "@babel/preset-react",
      "@babel/preset-typescript",
      [
        "@babel/preset-env",
        {
          "targets": {
            "electron": "12.0"
          }
        }
      ]
    ]
  }
}
