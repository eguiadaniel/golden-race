import React from 'react';
import { FaHorseHead, FaDog } from 'react-icons/fa';
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

const RightIcon = ({ item }) => {
  //   let icon = item.leftIcon;
  if (item.rightIcon === 'horse') {
    return (
      <p style={{ textAlign: 'left' }}>
        <FaHorseHead /> {item.participants}
      </p>
    );
  } else if (item.rightIcon === 'dog') {
    return (
      <p style={{ textAlign: 'left' }}>
        <FaDog /> {item.participants}
      </p>
    );
  } else if (item.rightIcon === 'champions') {
    return <ChampionsIcon />;
  } else return <span>12</span>;
};

export default RightIcon;
