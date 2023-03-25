import React from 'react';

import styles from './Search.module.scss';

export const Search = () => {
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        height="64px"
        id="SVGRoot"
        version="1.1"
        viewBox="0 0 64 64"
        width="64px"
      >
        <defs id="defs3848" />
        <g id="layer1">
        <g id="g5183" style={{'stroke':'#000000'}} transform="translate(25.5,-27)">
          <circle className="fil0 str1" cx="0.73810571" cy="53.392174" id="circle15" r="20.063322"
            style={{'clipRule':'evenodd','fill':'none','fillRule':'evenodd','stroke':'#000000','strokeWidth':'2.00005412','imageRendering':'optimizeQuality','shapeRendering':'geometricPrecision','textRendering':'geometricPrecision'}} />
          <line className="fil0 str2" id="line25"
            style={{'clipRule':'evenodd','fill':'none','fillRule':'evenodd','stroke':'#000000','strokeWidth':'3.99974346','strokeLinecap':'round','strokeLinejoin':'round','imageRendering':'optimizeQuality','shapeRendering':'geometricPrecision','textRendering':'geometricPrecision'}} x1="15.617603" x2="30.305107" y1="68.559662" y2="83.151169" />
          <path className="fil0 str0" d="m -12.701441,53.392174 c 0,-7.391751 6.047795,-13.439547 13.43954602,-13.439547" id="path281"
            style={{'clipRule':'evenodd','fill':'none','fillRule':'evenodd','stroke':'#000000','strokeWidth':'2.00005412','strokeLinecap':'round','strokeLinejoin':'round','imageRendering':'optimizeQuality','shapeRendering':'geometricPrecision','textRendering':'geometricPrecision'}} />
        </g>
        </g>
      </svg>
      <input
        className={styles.input}
        type="text"
        placeholder="Search pizza"
      />
    </div>
  );
};
