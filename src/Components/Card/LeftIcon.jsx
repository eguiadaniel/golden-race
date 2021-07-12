import React from 'react';
// import Foo from './components/Foo';
// import Bar from './components/Bar';

import EnglandIcon from './Icon/EnglandIcon';
import SpainIcon from './Icon/SpainIcon';
import ChampionsIcon from './Icon/ChampionsIcon';
import EmiratesIcon from './Icon/EmiratesIcon';
import USAIcon from './Icon/USAIcon';
import JapanIcon from './Icon/JapanIcon';
import BelgiumIcon from './Icon/BelgiumIcon';

// const leftIconComponents = {
//   england: EnglandIcon,
//   spain: SpainIcon,
//   champions: ChampionsIcon,
// };

// const Components = {
//   foo: Foo,
//   bar: Bar
// };

const LeftIcon = ({ item }) => {
  //   let icon = item.leftIcon;
  if (item.leftIcon === 'england') {
    return <EnglandIcon fill1="#f5f5f5" fill2="red" />;
  } else if (item.leftIcon === 'japan') {
    return <JapanIcon fill1="#f5f5f5" fill2="red" />;
  } else if (item.leftIcon === 'spain') {
    return <SpainIcon fill1="red" fill2="gold" fill3="red" />;
  } else if (item.leftIcon === 'belgium') {
    return <BelgiumIcon fill1="black" fill2="gold" fill3="red" />;
  } else if (item.leftIcon === 'france') {
    return <BelgiumIcon fill1="red" fill2="white" fill3="blue" />;
  } else if (item.leftIcon === 'russia') {
    return <SpainIcon fill1="#f5f5f5" fill2="blue" fill3="red" />;
  } else if (item.leftIcon === 'usa') {
    return <USAIcon fill1="#f5f5f5" fill2="blue" fill3="red" />;
  } else if (item.leftIcon === 'champions') {
    return <ChampionsIcon />;
  } else if (item.leftIcon === 'emirates') {
    return (
      <EmiratesIcon fill1="red" fill2="green" fill3="white" fill4="black" />
    );
  } else return <span></span>;
};

export default LeftIcon;
