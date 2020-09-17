var fs_extra_1 = require('fs-extra');
var build = function () {
  var pack = fs_extra_1.readJSONSync('./package.json');
  console.log(pack);
};
build();
