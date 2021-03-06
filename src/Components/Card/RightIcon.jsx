import React from 'react';
import { FaHorseHead, FaDog } from 'react-icons/fa';
import DogIcon from './Icon/DogIcon';

import ChampionsIcon from './Icon/ChampionsIcon';

const RightIcon = ({ item }) => {
  if (item.rightIcon === 'horse') {
    return (
      <p style={{ textAlign: 'left' }}>
        <FaHorseHead /> {item.participants}
      </p>
    );
  } else if (item.rightIcon === 'dog') {
    return (
      <p style={{ textAlign: 'left' }}>
        <DogIcon />
        {item.participants}
      </p>
    );
  } else if (item.rightIcon === 'champions') {
    return <ChampionsIcon />;
  } else return <span>12</span>;
};

export default RightIcon;
