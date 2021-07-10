import './App.css';
import { Box, Container } from '@material-ui/core';

import TableIcon from './Components/Header/TableIcon';
import TopFilters from './Components/Header/TopFilters';
import Slider from './Components/Slider/Slider';
import CardContainer from './Components/Card/CardContainer';

import SliderData from './Components/Slider/SliderData';
import CardData from './Components/Card/CardData.json';

function App() {
  console.log(SliderData);
  console.log(CardData);
  return (
    <div className="App">
      <TopFilters />
      <TableIcon />
      <Slider data={SliderData} />
      <CardContainer data={CardData} />
    </div>
  );
}

export default App;
