/*
 * @Author: chenchen 
 * @Date: 2019-03-04 01:35:57 
 * @Last Modified by:   chenchen 
 * @Last Modified time: 2019-03-04 01:35:57 
 */

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ?
    './' : '/'
}
