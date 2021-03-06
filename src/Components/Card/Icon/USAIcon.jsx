import React from 'react';

const USAIcon = ({ fill1, fill2, fill3 }) => {
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
          fill={fill3}
          d="M2.54,41.54h42.92c-0.04,0.19-0.09,0.37-0.14,0.56c-0.59,2.13-1.54,4.14-2.82,5.94h-37
        c-1.28-1.8-2.23-3.81-2.82-5.94C2.63,41.91,2.58,41.73,2.54,41.54z M17,57.02l7,4.45l10.91-6.93H13.09L17,57.02z M25,22.04h21V21.6
        v-6v-0.06H25V22.04z M25,2.1v6.94h21V2.1H25z M2,28.54V32v3.04h44v-6.5H25H2z"
        />
        <polygon
          fill={fill2}
          points="17,2.1 2,2.1 2,9.04 2,15.54 2,15.6 2,21.6 2,22.04 2,28.54 25,28.54 25,22.04 25,15.54 25,9.04 
        25,2.1 	"
        />
        <path
          fill={fill1}
          d="M5.5,48.04h37c-1.4,1.98-3.18,3.7-5.29,5.04l-2.3,1.46H13.09l-2.3-1.46C8.68,51.74,6.9,50.02,5.5,48.04z
		 M25,28.54h21v-6.5H25V28.54z M25,9.04v6.5h21v-6.5H25z M2,37.08c0,0.17,0,0.35,0.01,0.52c0.03,1.34,0.21,2.66,0.53,3.94h42.92
		c0.32-1.28,0.5-2.6,0.53-3.94C46,37.43,46,37.25,46,37.08v-2.04H2V37.08z"
        />
      </g>
    </svg>
  );
};

export default USAIcon;
