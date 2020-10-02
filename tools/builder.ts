import fetch from 'node-fetch';

const build = async () => {
  const repoEvents = await fetch(
    'https://api.github.com/repos/dbaker85/home-sites/events',
    {}
  );
  const json = await repoEvents.json();
  console.log(json);
};

build();
