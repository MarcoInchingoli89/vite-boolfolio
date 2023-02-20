module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/my-project/'
        : '/',
    assetsDir: 'assets'
}
