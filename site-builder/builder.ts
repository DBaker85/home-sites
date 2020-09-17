import { readJSONSync } from 'fs-extra';

const build = () => {
  const pack = readJSONSync('./package.json');
  console.log(pack);
};

build();
