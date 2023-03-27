import React, { useContext } from 'react';
import { SearchValueContext } from '../../context/searchValueContext';

import styles from './Search.module.scss';

export const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchValueContext);

  const clearInput = () => {
    setSearchValue('')
  };

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
        placeholder="Search pizza..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {searchValue && (
        <svg
          onClick={clearInput}
          className={styles.clearIcon}
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 512 512"
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
        >
          <path d="M256,7C118.467,7,7,118.468,7,256.002C7,393.533,118.467,505,256,505s249-111.467,249-248.998  C505,118.468,393.533,7,256,7z M256,485.08c-126.31,0-229.08-102.771-229.08-229.078C26.92,129.692,129.69,26.92,256,26.92  c126.309,0,229.08,102.771,229.08,229.082C485.08,382.309,382.309,485.08,256,485.08z" fill="#425661" />
          <polygon fill="#425661" points="368.545,157.073 354.461,142.988 255.863,241.587 157.733,143.456 143.648,157.54 241.78,255.672   143.648,353.809 157.733,367.893 255.863,269.75 354.461,368.361 368.545,354.275 269.947,255.672 " />
        </svg>
      )}
    </div>
  );
};
