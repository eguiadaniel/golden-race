import React from 'react';

const EmiratesIcon = ({ fill1, fill2, fill3, fill4 }) => {
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
          d="M2,1.5V15v6v15.48c0,0.17,0,0.35,0.01,0.52c0.04,1.54,0.27,3.04,0.67,4.5c1.23,4.48,4.09,8.42,8.11,10.98
    L17,56.42V37V21V1.5H2z"
        />
        <polygon fill={fill2} points="46,15 46,21 17,21 17,1.5 46,1.5 	" />
        <path fill={fill3} d="M46,21v15.48c0,0.17,0,0.35-0.01,0.52H17V21H46z" />
        <path
          fill={fill4}
          d="M17,37h28.99c-0.04,1.54-0.27,3.04-0.67,4.5c-1.23,4.48-4.09,8.42-8.11,10.98L24,60.87l-7-4.45V37z"
        />
      </g>
    </svg>
  );
};

export default EmiratesIcon;
