import './App.css';
import { Box, Container } from '@material-ui/core';

import TableIcon from './TableIcon';
import TopFilters from './Icons/TopFilters';
import Slider from './Components/Slider/Slider';

import SliderData from './Components/Slider/SliderData';

function App() {
  console.log(SliderData);
  return (
    <div className="App">
      <TopFilters />
      <TableIcon />
      <Slider data={SliderData} />
    </div>
  );
}

export default App;
