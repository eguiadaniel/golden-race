import React, { useState } from 'react';

import './Slider.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function Slider({ data }) {
  const [currImg, setCurrImg] = useState(2);

  console.log(data);
  console.log(data[0].image);

  return (
    <div className="slider">
      <div
        className="sliderInner"
        style={{ backgroundImage: `url(${data[currImg].image})` }}
      >
        <Container maxWidth="xs" className="message">
          <Typography variant="h5" color="initial">
            {data[currImg].header}
          </Typography>
          <Typography variant="h6" color="initial">
            {data[currImg].highlighted}
          </Typography>
          <Typography variant="subtitle2" gutterBottom color="initial">
            {data[currImg].paragraph}
          </Typography>
        </Container>
        {/* <img src={data[currImg].image} alt=""></img> */}
      </div>
    </div>
  );
}

export default Slider;
