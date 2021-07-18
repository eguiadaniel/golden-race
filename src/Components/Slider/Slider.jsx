import React, { useState } from 'react';

import './Slider.scss';

import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

// Had to import it as separate Component because transformations applied to one affected the other
import PlayArrowIconLeft from '@material-ui/icons/PlayArrow';

function Slider({ data }) {
  // useState Hook to set component State to current image
  const [currImg, setCurrImg] = useState(0);

  //Function that sets current Image state index to +-1
  // if is first or last in the array changes it to last or first
  // Future updates -> Slider slideable. This clcikable arrow option is not intuitive for mobile.

  function prevslide() {
    if (currImg === 0) {
      return setCurrImg(data.length - 1);
    }
    return setCurrImg(currImg - 1);
  }

  function nextslide() {
    if (currImg === data.length - 1) {
      return setCurrImg(0);
    }
    return setCurrImg(currImg + 1);
  }

  return (
    <>
      <div className="slider">
        <div
          className="sliderInner"
          style={{ backgroundImage: `url(${data[currImg].image})` }}
        >
          <div className="left" onClick={prevslide}>
            <PlayArrowIcon
              style={{ fontSize: 30, padding: 5, transform: 'rotate(180deg)' }}
            />
          </div>
          <div className="center">
            {/* For future updates message should be a reusable component accepting props from fetched data */}

            <div className="message">
              <Typography variant="h5" color="initial">
                {data[currImg].header}
              </Typography>
              <Typography variant="h6" color="initial">
                {data[currImg].highlighted}
              </Typography>
              <Typography variant="body1" gutterBottom color="initial">
                {data[currImg].paragraph}
              </Typography>
            </div>
          </div>
          <div className="right" onClick={nextslide}>
            <PlayArrowIconLeft style={{ fontSize: 30, padding: 5 }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
