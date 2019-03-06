/*
 * @Author: chenchen 
 * @Date: 2019-03-04 01:35:57 
 * @Last Modified by: chenchen
 * @Last Modified time: 2019-03-04 23:24:28
 */

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    './' : '/'
}
