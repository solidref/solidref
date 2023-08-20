module.exports = function override(config, env) {
  config = {
    ...config,
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
  }
  return config;
}