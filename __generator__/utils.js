const fs = require('fs');
const path = require('path');

const componentDir = fs.readdirSync(path.join(__dirname, '../src/components'));

const doesComponentExist = (componentName) => {
  return componentDir.some((component) => component === componentName);
};

module.exports = doesComponentExist;
