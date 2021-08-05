const componentGenerator = require('./component/index');
// const {readdirSync} = require('fs');

// const getDirectories = (source: PathLike) => {
//   readdirSync(source, {withFileTypes: true})
//     .filter((dir) => dir.isDirectory())
//     .map((dir) => {
//       return {name: dir.name, value: dir.name};
//     });
// };

/**
 * @param {Plop} plop
 */
module.exports = (plop) => {
  // plop generator code
  plop.setGenerator('component', componentGenerator);
};
