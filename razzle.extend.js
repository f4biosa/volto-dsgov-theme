const plugins = (defaultPlugins) => {
  defaultPlugins =
    {
      name: 'scss',
      options: {
        sass: {
          dev: {
            sassOptions: {
              includePaths: ['node_modules'],
              outputStyle: 'expanded',
              sourceMap: true,
              quiet: true,
              quietDeps: true,
            },
          },
          prod: {
            sassOptions: {
              includePaths: ['node_modules'],
              outputStyle: 'expanded',
              sourceMap: true,
              quiet: true,
              quietDeps: true,
            },
          },
        },
      },
    };
  return defaultPlugins;
};
const modify = (config, { target, dev }, webpack) => {
  const themeConfigPath = `${__dirname}/theme/theme.config`;
  config.resolve.alias['../../theme.config$'] = themeConfigPath;
  config.resolve.alias['../../theme.config'] = themeConfigPath;

  return config;
};

module.exports = {
  plugins,
  modify,

};
