import React from 'react';

const EnglandIcon = ({ fill1, fill2 }) => {
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
        <path
          fill={fill1}
          d="M2,1.5V15v21.48c0,1.72,0.23,3.4,0.68,5.02c1.23,4.48,4.09,8.42,8.11,10.98L24,60.87l13.21-8.39
		c4.02-2.56,6.88-6.5,8.11-10.98c0.45-1.62,0.68-3.3,0.68-5.02V15V1.5H2z"
        />
        <path
          fill={fill2}
          d="M36.5,28.5C36.5,35.4,30.9,41,24,41s-12.5-5.6-12.5-12.5S17.1,16,24,16S36.5,21.6,36.5,28.5z"
        />
      </g>
    </svg>
  );
};

export default EnglandIcon;
