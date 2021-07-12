import React, { useState } from 'react';

import './Slider.css';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlayArrowIconLeft from '@material-ui/icons/PlayArrow';

function Slider({ data }) {
  const [currImg, setCurrImg] = useState(0);
  return (
    <>
      <div className="slider">
        <div
          className="sliderInner"
          style={{ backgroundImage: `url(${data[currImg].image})` }}
        >
          <div
            className="left"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <PlayArrowIcon
              style={{ fontSize: 30, padding: 5, transform: 'rotate(180deg)' }}
            />
          </div>
          <div className="center">
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
          <div
            className="right"
            onClick={() => {
              currImg < data.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <PlayArrowIconLeft style={{ fontSize: 30, padding: 5 }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
