import React, { useState } from 'react';

import './Slider.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlayArrowIconLeft from '@material-ui/icons/PlayArrow';

function Slider({ data }) {
  const [currImg, setCurrImg] = useState(0);

  console.log(data);
  console.log(data[0].image);

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
          {/* <img src={data[currImg].image} alt=""></img> */}
        </div>
        {/* <Box style={{ zIndex: 99 }}>
          {data.map((item, index, arr) => (
            {arr.indexOf(item) === index && (
              <span style={{ fontSize: '2em', color: 'grey' }}> · </span> :  <span style={{ fontSize: '2em', color: 'red' }}> · </span>

            )}
          ))}
        </Box> */}
      </div>
    </>
  );
}

export default Slider;
