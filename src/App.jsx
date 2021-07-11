import './App.css';
import { Box, Container } from '@material-ui/core';

import TableIcon from './Components/Header/TableIcon';
import TopFilters from './Components/Header/TopFilters';
import Slider from './Components/Slider/Slider';
import CardContainer from './Components/Card/CardContainer';
import CardFeatured from './Components/Card/CardFeatured';

import SliderData from './Components/Slider/SliderData';
import CardData from './Components/Card/CardData.json';

function App() {
  const sports = CardData.sports;

  let featuredSports = sports.filter((item) => item.featured);
  let notFeaturedSports = sports.filter((item) => !item.featured);
  // console.log(SliderData);
  // console.log(sports);
  console.log(featuredSports);
  console.log(notFeaturedSports);
  return (
    <div className="App">
      <TopFilters />
      <TableIcon />
      <Slider data={SliderData} />
      <CardFeatured sports={featuredSports} />
      <CardContainer sports={notFeaturedSports} />
    </div>
  );
}

export default App;
