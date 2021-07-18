import React from 'react';

const SpainIcon = ({ fill1, fill2, fill3 }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="30px"
      height="40px"
      x="0px"
      y="0px"
      viewBox="0 0 50 55"
    >
      <g>
        <rect x="2" y="1.5" fill={fill1} width="44" height="17.5" />
        <path
          fill={fill2}
          d="M46,19v17.48c0,1.72-0.23,3.4-0.68,5.02H2.68C2.23,39.88,2,38.2,2,36.48V19H46z"
        />
        <path
          fill={fill3}
          d="M10.79,52.48L24,60.87l13.21-8.39c4.02-2.56,6.88-6.5,8.11-10.98H2.68C3.91,45.98,6.77,49.92,10.79,52.48z"
        />
      </g>
    </svg>
  );
};

export default SpainIcon;
