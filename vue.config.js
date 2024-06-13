const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

const webpack = require("webpack");
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true, // ou false, dependendo se você está usando Options API
        __VUE_PROD_DEVTOOLS__: false, // ou true, se você quiser habilitar DevTools na produção
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, // defina isso conforme a mensagem de erro
      }),
    ],
  },
};
