import React from 'react';
// import Foo from './components/Foo';
// import Bar from './components/Bar';

import EnglandIcon from './Icon/EnglandIcon';
import SpainIcon from './Icon/SpainIcon';
import ChampionsIcon from './Icon/ChampionsIcon';

const leftIconComponents = {
  england: EnglandIcon,
  spain: SpainIcon,
  champions: ChampionsIcon
};

// const Components = {
//   foo: Foo,
//   bar: Bar
// };

const LeftIcon = ({ item }) => {
  //   let icon = item.leftIcon;
  if (item.leftIcon === 'england') {
    return <EnglandIcon fill1="white" fill2="red" />;
  } else if (item.leftIcon === 'spain') {
    return <SpainIcon fill1="gold" fill2="red" />;
  } else if (item.leftIcon === 'champions') {
    return <ChampionsIcon />;
  } else return <SpainIcon fill1="tomato" fill2="gold" />;
};

export default LeftIcon;
