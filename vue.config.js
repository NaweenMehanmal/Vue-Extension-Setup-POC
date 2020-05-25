const entries = {
  content: "./src/content/content.js",
  background: "./src/background/background.js",
};

module.exports = {
  configureWebpack: (config) => {
    // Deleting default entry
    delete config.entry.app;
    // Change sourcemap type
    // config.devtool = "inline-source-map";
  },
  chainWebpack: (config) => {
    // Add new entry points
    for (const key of Object.keys(entries)) {
      config.entry(key).add(entries[key]);
    }
    // Remove chunks (for now) - TODO: fix this to optimize duplicate dependencies
    config.optimization.delete("splitChunks");
  },
  filenameHashing: true,
  productionSourceMap: false,
};
