import TableIcon from './Components/Header/TableIcon';
import TopFilters from './Components/Header/TopFilters';
import Slider from './Components/Slider/Slider';
import CardContainer from './Components/Card/CardContainer';
import CardFeatured from './Components/Card/CardFeatured';
import CallToAction from './Components/CallToAction/CallToAction';

// Card data as JSON and Slider data as JS file that could have been fetched from external database using fetch or axios.
import SliderData from './Components/Slider/SliderData';
import CardData from './Components/Card/CardData.json';

function App() {
  const sports = CardData.sports;

  // Filters fetched data to assign Featured Card and Not Featured Cards
  let featuredSports = sports.filter((item) => item.featured);
  let notFeaturedSports = sports.filter((item) => !item.featured);

  return (
    <div className="App">
      <TopFilters />
      <TableIcon />

      <Slider data={SliderData} />

      {/* Featured Card on top of the Card Stack */}
      <CardFeatured sports={featuredSports} />
      <CallToAction />
      <CardContainer sports={notFeaturedSports} />
    </div>
  );
}

export default App;
