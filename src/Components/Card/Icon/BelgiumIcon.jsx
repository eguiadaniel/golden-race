import React from 'react';

const BelgiumIcon = ({ fill1, fill2, fill3 }) => {
  return (
    <svg
      version="1.1"
      id="EnclgandIcon"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="30px"
      height="40px"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
    >
      <g>
        <path
          fill={fill1}
          d="M15,1.5v53.65l-4.21-2.67c-4.02-2.56-6.88-6.5-8.11-10.98C2.23,39.88,2,38.2,2,36.48V15V1.5H15z"
        />
        <polygon
          fill={fill2}
          points="33,1.5 33,55.15 24,60.87 15,55.15 15,1.5 	"
        />
        <path
          fill={fill3}
          d="M46,15v21.48c0,1.72-0.23,3.4-0.68,5.02c-1.23,4.48-4.09,8.42-8.11,10.98L33,55.15V1.5h13V15z"
        />
      </g>
    </svg>
  );
};

export default BelgiumIcon;
