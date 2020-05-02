import React from 'react';
import './oil.less';

export const Oil = ({ currentPosition }) => (
  <svg
    style={currentPosition}
    className="oil position-absolute"
    id="Layer_2_copy_4"
    height="512"
    viewBox="0 0 64 64"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2 copy 4"
  >
    <path d="m57 53.79a1 1 0 0 1 -1-1v-30.29a1 1 0 0 1 2 0v30.29a1 1 0 0 1 -1 1z" fill="#000" />
    <path d="m53 63-15-31-15 31z" fill="#000" />
    <circle cx="38" cy="28" fill="#000" r="4" />
    <g className="rotate-animation">
      <path d="m38 24h25v-3h-47v3z" fill="#000" />
      <path d="m6 28 7 14h3v-5l-8.12-16.24z" fill="#000" />
      <path d="m13 1-5.12 19.76 8.12 16.24v-13-3-20z" fill="#000" />
    </g>
    <g opacity=".5">
      <path d="m38 32-6 12.49c4.3 3.12 11.05 9.22 14 18.51h7z" fill="#fff" />
    </g>
    <path d="m38 24a4 4 0 0 0 -3.46 2 4 4 0 0 1 2-.54 4 4 0 0 1 4 4 4 4 0 0 1 -.54 2 4 4 0 0 0 -2-7.46z" fill="#000" />
    <circle cx="57" cy="55" fill="#000" r="4" />
    <path d="m57 51a4 4 0 0 0 -3.46 2 4 4 0 0 1 2-.54 4 4 0 0 1 4 4 4 4 0 0 1 -.54 2 4 4 0 0 0 -2-7.46z" fill="#000" />
  </svg>
);
