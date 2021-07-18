import React from 'react';

import EnglandIcon from './Icon/EnglandIcon';
import SpainIcon from './Icon/SpainIcon';
import ChampionsIcon from './Icon/ChampionsIcon';
import EmiratesIcon from './Icon/EmiratesIcon';
import USAIcon from './Icon/USAIcon';
import JapanIcon from './Icon/JapanIcon';
import BelgiumIcon from './Icon/BelgiumIcon';

// Custom component with diferent conditionals that will render difernt SVG depending on data passed on CardData.json.
// "leftIcon": "spain" or "leftIcon": "champions" renders diferent SVG that also contains color props that can be passed.
// With the same Icon we can reproduce diferent flags if we change the fill property. Spain Icon works for both Spain and Russia.

const LeftIcon = ({ item }) => {
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
