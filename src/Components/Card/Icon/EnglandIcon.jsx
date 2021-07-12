import React from 'react';

const EnglandIcon = ({ fill1, fill2 }) => {
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
      viewBox="0 0 50 55"
      //   style={fontSize:"5px"}
      // xml:space="preserve"
    >
      <g>
        <path
          class="st0"
          fill={fill1}
          d="M46,25.5v11.98c0,6.49-3.32,12.52-8.79,16l-10.96,6.96V25.5H46z M26.25,2.5V21H46V2.5H26.25z M2,25.5v11.98
		c0,6.49,3.32,12.52,8.79,16l10.96,6.96V25.5H2z M2,2.5V21h19.75V2.5H2z"
        />
        <polygon
          class="st1"
          fill={fill2}
          points="26.25,21 26.25,2.5 21.75,2.5 21.75,21 2,21 2,25.5 21.75,25.5 21.75,60.44 24,61.87 26.25,60.44 
		26.25,25.5 46,25.5 46,21 	"
        />
      </g>
    </svg>
  );
};

export default EnglandIcon;
