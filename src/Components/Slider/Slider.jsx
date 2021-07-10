import React, { useState } from 'react';

import './Slider.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Slider({ data }) {
  const [currImg, setCurrImg] = useState(0);

  console.log(data);
  console.log(data[0].image);

  const navigate = (increment) => {
    this.setState({
      index: Math.min(
        Math.max(this.state.index + increment, 0),
        this.props.pictures.length - 1
      )
    });
  };

  return (
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
          <ArrowBackIosIcon />
        </div>
        <div className="center">
          <div className="message">
            <Typography variant="h5" color="initial">
              {data[currImg].header}
            </Typography>
            <Typography variant="h6" color="initial">
              {data[currImg].highlighted}
            </Typography>
            <Typography variant="subtitle2" gutterBottom color="initial">
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
          <ArrowForwardIosIcon />
        </div>
        {/* <img src={data[currImg].image} alt=""></img> */}
      </div>
    </div>
  );
}

export default Slider;
