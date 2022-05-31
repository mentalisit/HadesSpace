const configureWebpack = require('./webpack.config.js');

const isDev = (process.env.NODE_ENV === 'development');
const isNebulaBuild = !!process.env.VUE_APP_NEBULA_BUILD;

module.exports = {
    publicPath: (isDev ? '/' : `/HadesSpace/${isNebulaBuild ? 'Nebula/' : ''}`),
    outputDir: isNebulaBuild ? './dist/Nebula/' : './dist',
    productionSourceMap: isDev,
    lintOnSave: isDev,
    chainWebpack: (config) => {
        config.plugin('copy').tap(([options]) => {
            if (isNebulaBuild) {
                options.patterns[0].from = `${options.patterns[0].from}-nebula`;
            }
            return [options];
        });
    },
    css: {
        sourceMap: isDev,
    },
    pwa: {
        name: 'Hades Space',
        themeColor: '#161b1d',
        workboxOptions: {
            skipWaiting: true,
        },
        manifestOptions: {
            icons: [
                { 'src': 'favicon/32x32.png', 'sizes': '32x32', 'type': 'image/png' },
                { 'src': 'favicon/16x16.png', 'sizes': '16x16', 'type': 'image/png' },
                { 'src': 'favicon/512x512.png', 'sizes': '512x512', 'type': 'image/png' },
                { 'src': 'favicon/192x192.png', 'sizes': '192x192', 'type': 'image/png' },
                { 'src': 'favicon/512x512.png', 'sizes': '512x512', 'type': 'image/png', 'purpose': 'maskable' },
                { 'src': 'favicon/192x192.png', 'sizes': '192x192', 'type': 'image/png', 'purpose': 'maskable' },
            ],
        },
        iconPaths: {
            favicon32: 'favicon/32x32.png',
            favicon16: 'favicon/16x16.png',
            appleTouchIcon: 'favicon/apple-touch.png',
            maskIcon: 'favicon/safari-pinned-tab.svg',
            msTileImage: 'favicon/150x150.png',
            faviconSVG: null,
        },
    },
    configureWebpack,
};